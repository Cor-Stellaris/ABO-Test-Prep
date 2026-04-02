import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { getOrCreateUser } from '@/lib/get-user';

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const { mode, categoryId, questionCount, timed } = body;

  const user = await getOrCreateUser(userId);
  if (!user) return NextResponse.json({ error: 'Failed to get user' }, { status: 500 });

  // Fetch questions based on mode
  let query = supabaseAdmin
    .from('questions')
    .select('*')
    .eq('is_generator', false);

  if (mode === 'category' && categoryId) {
    query = query.eq('category_id', categoryId);
  }

  const { data: allQuestions } = await query;
  if (!allQuestions || allQuestions.length === 0) {
    return NextResponse.json({ error: 'No questions found' }, { status: 404 });
  }

  // Shuffle and limit questions
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  const count = mode === 'exam_sim' ? 125 : (mode === 'category' ? allQuestions.length : (questionCount || 20));
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Calculate time limit
  const timeLimit = timed || mode === 'exam_sim'
    ? mode === 'exam_sim' ? 120 : Math.ceil(selected.length * 1)
    : null;

  // Create test result record
  const { data: testResult, error } = await supabaseAdmin
    .from('test_results')
    .insert({
      user_id: user.id,
      mode,
      category_id: categoryId || null,
      total_questions: selected.length,
      correct: 0,
      incorrect: 0,
      skipped: 0,
      score: 0,
      answers: [],
      questions: selected.map((q) => ({
        id: q.id,
        category_id: q.category_id,
        question: q.question,
        choices: q.choices,
        correct_index: q.correct_index,
        explanation: q.explanation,
      })),
      time_limit_minutes: timeLimit,
    })
    .select('id')
    .single();

  if (error) {
    return NextResponse.json({ error: 'Failed to create test' }, { status: 500 });
  }

  return NextResponse.json({ testId: testResult.id });
}
