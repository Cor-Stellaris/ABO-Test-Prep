'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Category } from '@/lib/types';

export default function CategoryTestList({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function startCategoryTest(categoryId: string) {
    setLoading(categoryId);
    const res = await fetch('/api/test/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'category', categoryId }),
    });
    const data = await res.json();
    if (data.testId) {
      router.push(`/test/${data.testId}`);
    }
    setLoading(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => startCategoryTest(cat.id)}
          disabled={loading === cat.id}
          className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition text-left disabled:opacity-50"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{cat.icon}</span>
            <div>
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                {loading === cat.id ? 'Starting...' : cat.description}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
