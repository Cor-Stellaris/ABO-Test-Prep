import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { getOrCreateUser } from '@/lib/get-user';

export default async function ReviewPage({
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

  const questions = testResult.questions as Array<{
    id: string;
    question: string;
    choices: string[];
    correct_index: number;
    explanation: string;
  }>;
  const answers = testResult.answers as (number | null)[];

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <Link
          href={`/test/${testId}/results`}
          className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block"
        >
          ← Back to results
        </Link>
        <h2 className="text-2xl font-bold mb-6">Review Answers</h2>

        <div className="space-y-6">
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correct_index;
            const isSkipped = userAnswer === null || userAnswer === undefined;

            return (
              <div key={q.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-2 mb-4">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white ${
                    isSkipped ? 'bg-gray-400' : isCorrect ? 'bg-[var(--color-success)]' : 'bg-[var(--color-danger)]'
                  }`}>
                    {i + 1}
                  </span>
                  <p className="font-medium">{q.question}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {q.choices.map((choice, ci) => {
                    let style = 'border-gray-200';
                    if (ci === q.correct_index) style = 'border-[var(--color-success)] bg-green-50';
                    if (ci === userAnswer && ci !== q.correct_index) style = 'border-[var(--color-danger)] bg-red-50';

                    return (
                      <div key={ci} className={`px-4 py-2 rounded-lg border-2 text-sm ${style}`}>
                        <span className="font-medium text-[var(--color-text-light)] mr-2">
                          {String.fromCharCode(65 + ci)}.
                        </span>
                        {choice}
                        {ci === q.correct_index && <span className="ml-2 text-[var(--color-success)]">✓</span>}
                        {ci === userAnswer && ci !== q.correct_index && <span className="ml-2 text-[var(--color-danger)]">✗</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
