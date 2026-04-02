import { supabaseAdmin } from '@/lib/supabase/admin';

export async function getOrCreateUser(clerkId: string) {
  let { data: user } = await supabaseAdmin
    .from('users')
    .select('id, email')
    .eq('clerk_id', clerkId)
    .single();

  if (!user) {
    const { data: newUser } = await supabaseAdmin
      .from('users')
      .insert({ clerk_id: clerkId, email: '' })
      .select('id, email')
      .single();
    user = newUser;
  }

  return user;
}
