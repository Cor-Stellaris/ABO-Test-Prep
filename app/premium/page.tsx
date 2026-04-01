'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessBanner() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  if (!success) return null;
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
      <p className="font-semibold text-[var(--color-success)]">Premium Active!</p>
      <p className="text-sm text-[var(--color-text-light)]">You now have access to all features.</p>
    </div>
  );
}

export default function PremiumPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-lg mx-auto px-6 py-8">
        <Link href="/dashboard" className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block">
          ← Back to dashboard
        </Link>

        <Suspense>
          <SuccessBanner />
        </Suspense>

        <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[var(--color-accent)]">
          <div className="text-center mb-6">
            <span className="text-4xl">⭐</span>
            <h2 className="text-2xl font-bold mt-2">Go Premium</h2>
            <p className="text-3xl font-bold mt-2">
              $9.99<span className="text-sm font-normal text-[var(--color-text-light)]">/month</span>
            </p>
          </div>

          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-success)]">✓</span>
              Full exam simulation (125 questions, 2 hours)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-success)]">✓</span>
              Test history and progress tracking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-success)]">✓</span>
              Timed test mode
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-success)]">✓</span>
              Review missed questions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-success)]">✓</span>
              Larger mock tests (30, 50, 75 questions)
            </li>
          </ul>

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Redirecting...' : 'Subscribe — $9.99/mo'}
          </button>

          <p className="text-xs text-center text-[var(--color-text-light)] mt-3">
            Cancel anytime. Powered by Stripe.
          </p>
        </div>
      </main>
    </div>
  );
}
