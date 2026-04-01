import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import type { Category } from '@/lib/types';
import CategoryTestList from '@/components/CategoryTestList';

export default async function CategoryTestPage() {
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
        <Link href="/dashboard" className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block">
          ← Back to dashboard
        </Link>
        <h2 className="text-2xl font-bold mb-6">Practice by Category</h2>
        <CategoryTestList categories={categories as Category[]} />
      </main>
    </div>
  );
}
