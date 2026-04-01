export interface User {
  id: string;
  clerk_id: string;
  email: string;
  name: string | null;
  premium_until: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  display_order: number;
}

export interface Question {
  id: string;
  category_id: string;
  question: string;
  choices: string[];
  correct_index: number;
  explanation: string;
  is_generator: boolean;
  created_at: string;
}

export interface StudyMaterial {
  id: string;
  category_id: string;
  section_title: string;
  content: string;
  display_order: number;
}

export interface TestResult {
  id: string;
  user_id: string;
  mode: 'mock' | 'category' | 'exam_sim';
  category_id: string | null;
  total_questions: number;
  correct: number;
  incorrect: number;
  skipped: number;
  score: number;
  category_results: Record<string, unknown> | null;
  answers: unknown[];
  questions: unknown[];
  time_limit_minutes: number | null;
  time_used_seconds: number | null;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  status: 'active' | 'canceled' | 'past_due';
  current_period_end: string;
  created_at: string;
}
