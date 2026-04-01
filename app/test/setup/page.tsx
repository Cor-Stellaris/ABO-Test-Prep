'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const QUESTION_COUNTS = [
  { value: 20, label: '20 Questions', premium: false },
  { value: 30, label: '30 Questions', premium: true },
  { value: 50, label: '50 Questions', premium: true },
  { value: 75, label: '75 Questions', premium: true },
];

export default function TestSetupPage() {
  const router = useRouter();
  const [count, setCount] = useState(20);
  const [timed, setTimed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function startTest() {
    setLoading(true);
    const res = await fetch('/api/test/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'mock', questionCount: count, timed }),
    });
    const data = await res.json();
    if (data.testId) {
      router.push(`/test/${data.testId}`);
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
        <h2 className="text-2xl font-bold mb-6">Mock Test Setup</h2>

        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <label className="block font-semibold mb-3">Number of Questions</label>
            <div className="grid grid-cols-2 gap-3">
              {QUESTION_COUNTS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setCount(opt.value)}
                  className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                    count === opt.value
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${opt.premium ? 'relative' : ''}`}
                >
                  {opt.label}
                  {opt.premium && (
                    <span className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-white text-xs px-1.5 py-0.5 rounded-full">
                      PRO
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold">Timed Mode</span>
              <p className="text-sm text-[var(--color-text-light)]">1 minute per question</p>
            </div>
            <button
              onClick={() => setTimed(!timed)}
              className={`w-12 h-6 rounded-full transition relative ${
                timed ? 'bg-[var(--color-primary)]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${
                  timed ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          <button
            onClick={startTest}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[var(--color-secondary)] text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Starting...' : 'Start Test'}
          </button>
        </div>
      </main>
    </div>
  );
}
