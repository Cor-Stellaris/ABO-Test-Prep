import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { getOrCreateUser } from '@/lib/get-user';
import TestEngine from '@/components/TestEngine';

export default async function TestPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const user = await getOrCreateUser(userId);
  if (!user) redirect('/sign-in');

  const { data: testResult } = await supabaseAdmin
    .from('test_results')
    .select('*')
    .eq('id', testId)
    .eq('user_id', user.id)
    .single();

  if (!testResult) redirect('/dashboard');

  // If already submitted (has answers), go to results
  if (testResult.answers && (testResult.answers as unknown[]).length > 0) {
    redirect(`/test/${testId}/results`);
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>
      <TestEngine
        testId={testId}
        questions={testResult.questions as Array<{
          id: string;
          category_id: string;
          question: string;
          choices: string[];
          correct_index: number;
          explanation: string;
        }>}
        timeLimitMinutes={testResult.time_limit_minutes}
      />
    </div>
  );
}
