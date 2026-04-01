import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">ABO Prep</h1>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 rounded-lg bg-[var(--color-accent)] hover:opacity-90 transition font-semibold"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
          Pass Your ABO Exam
        </h2>
        <p className="text-lg text-[var(--color-text-light)] max-w-xl mb-8">
          Study materials, practice tests, and full exam simulations to help you earn your optician certification.
        </p>

        <div className="flex gap-4 mb-12">
          <Link
            href="/sign-up"
            className="px-8 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-lg hover:opacity-90 transition"
          >
            Start Studying Free
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-lg mb-2">Study Material</h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Comprehensive content across all 8 ABO exam categories.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-lg mb-2">Practice Tests</h3>
            <p className="text-[var(--color-text-light)] text-sm">
              270+ questions with detailed explanations for every answer.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Exam Simulation</h3>
            <p className="text-[var(--color-text-light)] text-sm">
              Full 125-question timed exams that mirror the real ABO test.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16 max-w-2xl w-full">
          <h3 className="text-2xl font-bold mb-6">Simple Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200">
              <h4 className="font-semibold text-lg mb-1">Free</h4>
              <p className="text-3xl font-bold mb-4">$0</p>
              <ul className="text-sm text-left space-y-2 text-[var(--color-text-light)]">
                <li>✓ All study materials</li>
                <li>✓ Category practice</li>
                <li>✓ 20-question mock tests</li>
                <li className="text-gray-400">✗ Exam simulation</li>
                <li className="text-gray-400">✗ Test history</li>
                <li className="text-gray-400">✗ Timed tests</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[var(--color-accent)]">
              <h4 className="font-semibold text-lg mb-1 text-[var(--color-accent)]">Premium</h4>
              <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm font-normal text-[var(--color-text-light)]">/mo</span></p>
              <ul className="text-sm text-left space-y-2 text-[var(--color-text-light)]">
                <li>✓ Everything in Free</li>
                <li>✓ Full exam simulation (125Q)</li>
                <li>✓ Test history & tracking</li>
                <li>✓ Timed test mode</li>
                <li>✓ Missed question review</li>
                <li>✓ Larger mock tests (up to 75Q)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-[var(--color-text-light)]">
        © 2026 ABO Prep by Corstellaris
      </footer>
    </div>
  );
}
