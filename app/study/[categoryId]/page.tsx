import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import StudySections from '@/components/StudySections';
import { notFound } from 'next/navigation';
import type { Category, StudyMaterial } from '@/lib/types';

export default async function StudyCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  const [{ data: category }, { data: sections }] = await Promise.all([
    supabase.from('categories').select('*').eq('id', categoryId).single(),
    supabase
      .from('study_material')
      .select('*')
      .eq('category_id', categoryId)
      .order('display_order'),
  ]);

  if (!category) notFound();

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="bg-[var(--color-primary)] text-white py-4 px-6 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold hover:opacity-90">ABO Prep</Link>
        <UserButton />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <Link
          href="/study"
          className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block"
        >
          ← Back to categories
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{(category as Category).icon}</span>
          <h2 className="text-2xl font-bold">{(category as Category).name}</h2>
        </div>
        <StudySections sections={sections as StudyMaterial[]} />
      </main>
    </div>
  );
}
