import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { getOrCreateUser } from '@/lib/get-user';

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const { testId, answers, timeUsedSeconds } = body;

  const user = await getOrCreateUser(userId);
  if (!user) return NextResponse.json({ error: 'Failed to get user' }, { status: 500 });

  // Get test result with questions
  const { data: testResult } = await supabaseAdmin
    .from('test_results')
    .select('*')
    .eq('id', testId)
    .eq('user_id', user.id)
    .single();

  if (!testResult) return NextResponse.json({ error: 'Test not found' }, { status: 404 });

  const questions = testResult.questions as Array<{
    id: string;
    category_id: string;
    correct_index: number;
  }>;

  // Calculate results
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;
  const categoryResults: Record<string, { correct: number; total: number }> = {};

  questions.forEach((q, i) => {
    const userAnswer = answers[i];

    if (!categoryResults[q.category_id]) {
      categoryResults[q.category_id] = { correct: 0, total: 0 };
    }
    categoryResults[q.category_id].total++;

    if (userAnswer === null || userAnswer === undefined) {
      skipped++;
    } else if (userAnswer === q.correct_index) {
      correct++;
      categoryResults[q.category_id].correct++;
    } else {
      incorrect++;
    }
  });

  const score = Math.round((correct / questions.length) * 100);

  // Update test result
  const { error } = await supabaseAdmin
    .from('test_results')
    .update({
      correct,
      incorrect,
      skipped,
      score,
      answers,
      category_results: categoryResults,
      time_used_seconds: timeUsedSeconds || null,
    })
    .eq('id', testId);

  if (error) return NextResponse.json({ error: 'Failed to save results' }, { status: 500 });

  return NextResponse.json({ score, correct, incorrect, skipped, categoryResults });
}
