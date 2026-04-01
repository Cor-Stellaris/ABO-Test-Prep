import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(request: Request) {
  const body = await request.json();
  const eventType = body.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name } = body.data;
    const email = email_addresses?.[0]?.email_address;
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    await supabaseAdmin.from('users').upsert(
      {
        clerk_id: id,
        email: email || '',
        name,
      },
      { onConflict: 'clerk_id' }
    );
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = body.data;
    const email = email_addresses?.[0]?.email_address;
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    await supabaseAdmin
      .from('users')
      .update({ email: email || '', name })
      .eq('clerk_id', id);
  }

  if (eventType === 'user.deleted') {
    const { id } = body.data;
    await supabaseAdmin.from('users').delete().eq('clerk_id', id);
  }

  return NextResponse.json({ received: true });
}
