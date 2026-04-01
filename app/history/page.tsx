import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/admin';

export default async function HistoryPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const { data: user } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', userId)
    .single();

  if (!user) redirect('/sign-in');

  const { data: tests } = await supabaseAdmin
    .from('test_results')
    .select('id, mode, category_id, total_questions, score, correct, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const modeLabels: Record<string, string> = {
    mock: 'Mock Test',
    category: 'Category Practice',
    exam_sim: 'Exam Simulation',
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <Link href="/dashboard" className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block">
          ← Back to dashboard
        </Link>
        <h2 className="text-2xl font-bold mb-6">Test History</h2>

        {!tests || tests.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <p className="text-[var(--color-text-light)]">No tests taken yet.</p>
            <Link
              href="/test/setup"
              className="inline-block mt-4 px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition"
            >
              Take Your First Test
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {tests.map((test) => {
              const passed = test.score >= 70;
              const date = new Date(test.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <Link
                  key={test.id}
                  href={`/test/${test.id}/results`}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">
                      {modeLabels[test.mode] || test.mode}
                      {test.category_id && ` — ${test.category_id}`}
                    </p>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {date} · {test.correct}/{test.total_questions} correct
                    </p>
                  </div>
                  <span
                    className={`text-2xl font-bold ${
                      passed ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'
                    }`}
                  >
                    {test.score}%
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
