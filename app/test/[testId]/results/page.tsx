import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { getOrCreateUser } from '@/lib/get-user';

const CATEGORY_NAMES: Record<string, string> = {
  anatomy: 'Ocular Anatomy & Physiology',
  lenses: 'Ophthalmic Lenses',
  frames: 'Frames & Materials',
  rx: 'Prescription Interpretation',
  prism: 'Prism',
  measurements: 'Patient Measurements & Fittings',
  ansi: 'ANSI Standards',
  definitions: 'Optical Terminology & Definitions',
};

export default async function TestResultsPage({
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

  const passed = testResult.score >= 70;
  const categoryResults = (testResult.category_results || {}) as Record<
    string,
    { correct: number; total: number }
  >;

  const timeUsed = testResult.time_used_seconds;
  const minutes = timeUsed ? Math.floor(timeUsed / 60) : 0;
  const seconds = timeUsed ? timeUsed % 60 : 0;

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Score Card */}
        <div className={`rounded-xl p-8 text-center mb-6 ${
          passed ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
        }`}>
          <p className="text-6xl font-bold mb-2" style={{
            color: passed ? 'var(--color-success)' : 'var(--color-danger)'
          }}>
            {testResult.score}%
          </p>
          <p className="text-lg font-semibold mb-1">
            {passed ? 'Passed!' : 'Keep Studying'}
          </p>
          <p className="text-[var(--color-text-light)]">
            {testResult.correct} correct · {testResult.incorrect} incorrect · {testResult.skipped} skipped
          </p>
          {timeUsed && (
            <p className="text-sm text-[var(--color-text-light)] mt-1">
              Time: {minutes}m {seconds}s
            </p>
          )}
        </div>

        {/* Category Breakdown */}
        {Object.keys(categoryResults).length > 1 && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h3 className="font-semibold mb-4">Category Breakdown</h3>
            <div className="space-y-3">
              {Object.entries(categoryResults).map(([catId, result]) => {
                const pct = Math.round((result.correct / result.total) * 100);
                return (
                  <div key={catId}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{CATEGORY_NAMES[catId] || catId}</span>
                      <span className="font-medium">
                        {result.correct}/{result.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: pct >= 70 ? 'var(--color-success)' : 'var(--color-danger)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href={`/test/${testId}/review`}
            className="flex-1 text-center py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition"
          >
            Review Answers
          </Link>
          <Link
            href="/dashboard"
            className="flex-1 text-center py-3 rounded-lg border-2 border-gray-200 font-semibold hover:bg-gray-50 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
