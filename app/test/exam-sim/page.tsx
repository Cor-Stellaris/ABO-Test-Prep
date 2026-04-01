'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ExamSimPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function startExam() {
    setLoading(true);
    const res = await fetch('/api/test/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'exam_sim', timed: true }),
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

        <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[var(--color-accent)]">
          <div className="text-center mb-6">
            <span className="text-4xl">🎯</span>
            <h2 className="text-2xl font-bold mt-2">Exam Simulation</h2>
            <p className="text-[var(--color-text-light)] mt-2">
              Experience the real ABO exam format
            </p>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-light)]">Questions</span>
              <span className="font-semibold">125</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-light)]">Time Limit</span>
              <span className="font-semibold">2 Hours</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-light)]">Passing Score</span>
              <span className="font-semibold">70%</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[var(--color-text-light)]">Categories</span>
              <span className="font-semibold">All 8</span>
            </div>
          </div>

          <button
            onClick={startExam}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Starting...' : 'Begin Exam Simulation'}
          </button>
        </div>
      </main>
    </div>
  );
}
