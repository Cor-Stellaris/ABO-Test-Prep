import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const firstName = user.firstName || 'Student';

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">ABO Prep</h1>
        <UserButton />
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Welcome back, {firstName}!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Study */}
          <Link
            href="/study"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
              Study Material
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Review content across all 8 ABO exam categories.
            </p>
          </Link>

          {/* Mock Test */}
          <Link
            href="/test/setup"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
              Mock Test
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Take a practice test with questions from all categories.
            </p>
          </Link>

          {/* Category Practice */}
          <Link
            href="/test/category"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
              Practice by Category
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Focus on specific topics to strengthen weak areas.
            </p>
          </Link>

          {/* Exam Sim */}
          <Link
            href="/test/exam-sim"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
              Exam Simulation
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Full 125-question timed exam that mirrors the real ABO test.
            </p>
          </Link>

          {/* History */}
          <Link
            href="/history"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
              Test History
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Track your progress and review past test results.
            </p>
          </Link>

          {/* Premium */}
          <Link
            href="/premium"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group border-2 border-[var(--color-accent)]"
          >
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--color-accent)] group-hover:opacity-80 transition">
              Go Premium
            </h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Unlock all features for $9.99/month.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
