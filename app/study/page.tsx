import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import type { Category } from '@/lib/types';

export default async function StudyPage() {
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('display_order');

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Study Material</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(categories as Category[] | null)?.map((cat) => (
            <Link
              key={cat.id}
              href={`/study/${cat.id}`}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="font-semibold group-hover:text-[var(--color-primary)] transition">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
