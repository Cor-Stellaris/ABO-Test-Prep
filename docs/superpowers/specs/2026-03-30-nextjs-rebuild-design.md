# ABO Prep App — Next.js Rebuild Design Spec

## Purpose

Convert the ABO certification prep app from a React Native Expo app to a full-stack Next.js web application with user accounts, persistent data storage, and Stripe subscriptions. The app will be deployed on Vercel at abo.corstellaris.com.

## Stack

| Service | Role |
|---------|------|
| Next.js (App Router) | Web framework, server/client rendering |
| Vercel | Hosting + serverless functions |
| Supabase | PostgreSQL database + API |
| Clerk | Authentication (sign-up, login, user management) |
| Stripe | Payment processing (annual subscription) |
| Tailwind CSS | Styling |

## Database Schema (Supabase)

### users
Synced from Clerk via webhook. Stores app-specific user data.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| clerk_id | text | Unique, from Clerk |
| email | text | |
| name | text | Nullable |
| premium_until | timestamptz | Null = free tier |
| created_at | timestamptz | Default now() |

### categories
The 8 ABO exam categories.

| Column | Type | Notes |
|--------|------|-------|
| id | text | Primary key (e.g., 'anatomy') |
| name | text | Display name |
| icon | text | Emoji |
| description | text | Short description |
| display_order | integer | Sort order |

### questions
All exam questions (298 initial, expandable).

| Column | Type | Notes |
|--------|------|-------|
| id | text | Primary key (e.g., 'anat-1') |
| category_id | text | FK → categories.id |
| question | text | Question text |
| choices | jsonb | Array of 4 strings |
| correct_index | integer | 0-3 |
| explanation | text | Answer explanation |
| is_generator | boolean | Default false |
| created_at | timestamptz | Default now() |

### study_material
Study content organized by category and section.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| category_id | text | FK → categories.id |
| section_title | text | Expandable section title |
| content | text | Markdown content |
| display_order | integer | Sort order within category |

### test_results
Every test taken by every user.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| user_id | uuid | FK → users.id |
| mode | text | 'mock', 'category', 'exam_sim' |
| category_id | text | Nullable (for category tests) |
| total_questions | integer | |
| correct | integer | |
| incorrect | integer | |
| skipped | integer | |
| score | integer | 0-100 |
| category_results | jsonb | Per-category breakdown |
| answers | jsonb | Array of user answers |
| questions | jsonb | Array of question snapshots (for review) |
| time_limit_minutes | integer | Nullable |
| time_used_seconds | integer | Nullable |
| created_at | timestamptz | Default now() |

### subscriptions
Stripe subscription tracking.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| user_id | uuid | FK → users.id |
| stripe_customer_id | text | |
| stripe_subscription_id | text | |
| status | text | 'active', 'canceled', 'past_due' |
| current_period_end | timestamptz | When subscription renews/expires |
| created_at | timestamptz | Default now() |

### Row Level Security (RLS)
- Users can only read/write their own test_results
- Users can only read their own subscription
- Questions, categories, study_material are readable by all authenticated users
- Write access to content tables restricted to service role only

## Routes

| Route | Purpose | Auth | Component Type |
|-------|---------|------|---------------|
| `/` | Landing page (marketing, pricing, CTA) | No | Server |
| `/sign-in` | Clerk sign-in | No | Client |
| `/sign-up` | Clerk sign-up | No | Client |
| `/dashboard` | Home — links to study, test, history | Yes | Server |
| `/study` | Category list | Yes | Server |
| `/study/[categoryId]` | Study material with expandable sections | Yes | Client |
| `/test/setup` | Mock test config (count, timer) | Yes | Client |
| `/test/category` | Pick category to practice | Yes | Server |
| `/test/exam-sim` | Exam simulation setup | Yes + Premium | Client |
| `/test/[testId]` | Test engine (taking the test) | Yes | Client |
| `/test/[testId]/results` | Test results with category breakdown | Yes | Client |
| `/test/[testId]/review` | Review missed questions | Yes + Premium | Client |
| `/history` | Test history, stats, charts | Yes | Client |
| `/premium` | Pricing + Stripe checkout | Yes | Client |
| `/api/webhooks/stripe` | Handle Stripe events | No (Stripe signature) | API |
| `/api/webhooks/clerk` | Sync Clerk users to Supabase | No (Clerk signature) | API |
| `/api/checkout` | Create Stripe checkout session | Yes | API |
| `/api/test/start` | Create test session, fetch questions | Yes | API |
| `/api/test/submit` | Submit test answers, calculate score | Yes | API |

## Premium Tiers

| Feature | Free | Premium ($29.99/yr) |
|---------|------|---------------------|
| Study material | All categories | All categories |
| Practice by category | All categories | All categories |
| Mock tests | 20 questions max | 20, 30, 50, 75 questions |
| Exam simulation (125Q/2hr) | Locked | Unlocked |
| Test history | Yes | Yes |
| Missed question review | Locked | Unlocked |

Premium is determined by: `user.premium_until > now()` OR `subscription.status === 'active'`.

## Authentication Flow

1. User visits `/` → sees landing page with "Sign Up" / "Sign In"
2. Clerk handles auth UI at `/sign-in` and `/sign-up`
3. On first sign-up, Clerk webhook fires → creates user in Supabase `users` table
4. All `/dashboard`, `/study`, `/test`, `/history` routes protected by Clerk middleware
5. Premium routes additionally check `premium_until` or subscription status

## Payment Flow

1. User visits `/premium` → sees pricing and features
2. Clicks "Subscribe" → API route `/api/checkout` creates Stripe Checkout Session
3. User redirected to Stripe's hosted checkout page
4. After payment, Stripe webhook fires → updates `subscriptions` table + sets `users.premium_until`
5. User redirected back to `/premium?success=true` → sees "Premium Active"

## Test Flow

1. User configures test (mode, count, timer) on setup page
2. Client calls `/api/test/start` → creates test_result row, returns shuffled questions
3. User takes test on `/test/[testId]` (all client-side: question display, answer selection, timer)
4. On completion, client calls `/api/test/submit` with answers → server calculates score, updates test_result
5. User sees results on `/test/[testId]/results`
6. Optional: review missed questions on `/test/[testId]/review`

Math generators run client-side (same functions as current app, just in TypeScript).

## Data Migration

A seed script will:
1. Insert 8 categories from current `categories.js`
2. Insert 278 static questions from current `questions.js`
3. Insert all study material sections from current `studyMaterial.js`
4. Math generators remain as client-side utility functions (not in database)

## File Structure

```
app/
├── layout.tsx              # Root layout (Clerk provider, Tailwind)
├── page.tsx                # Landing page
├── sign-in/[[...sign-in]]/page.tsx
├── sign-up/[[...sign-up]]/page.tsx
├── dashboard/page.tsx      # Home screen
├── study/
│   ├── page.tsx            # Category list
│   └── [categoryId]/page.tsx
├── test/
│   ├── setup/page.tsx      # Mock test setup
│   ├── category/page.tsx   # Category picker
│   ├── exam-sim/page.tsx   # Exam sim setup
│   └── [testId]/
│       ├── page.tsx        # Test engine
│       ├── results/page.tsx
│       └── review/page.tsx
├── history/page.tsx
├── premium/page.tsx
└── api/
    ├── webhooks/
    │   ├── stripe/route.ts
    │   └── clerk/route.ts
    ├── checkout/route.ts
    └── test/
        ├── start/route.ts
        └── submit/route.ts

lib/
├── supabase/
│   ├── client.ts           # Browser client
│   ├── server.ts           # Server client
│   └── admin.ts            # Service role client
├── stripe.ts               # Stripe client + helpers
├── questions.ts            # Math generators + shuffling logic
├── types.ts                # Shared TypeScript types
└── utils.ts                # Score calculation, formatting

components/
├── ui/                     # Reusable UI primitives
├── FormattedText.tsx       # Markdown renderer for study material
├── QuestionCard.tsx        # Question display + answer choices
├── Timer.tsx               # Countdown timer
├── ProgressBar.tsx         # Test progress indicator
├── CategoryCard.tsx        # Category display card
├── TestResultCard.tsx      # Test result summary
└── PremiumGate.tsx         # Wrapper that checks premium status

scripts/
└── seed.ts                 # Seed Supabase with questions + study material

middleware.ts               # Clerk auth middleware
```

## Color Palette (preserved from current app)

| Token | Value | Usage |
|-------|-------|-------|
| primary | #1A5276 | Headers, primary buttons, links |
| secondary | #148F77 | Success actions, next buttons |
| accent | #E67E22 | CTAs, exam sim, premium |
| success | #27AE60 | Correct answers, passing score |
| danger | #E74C3C | Wrong answers, failing score |
| warning | #F39C12 | Timer warning, caution states |
| background | #F4F6F7 | Page background |
| card | #FFFFFF | Card surfaces |
| text | #2C3E50 | Primary text |
| textLight | #7F8C8D | Secondary text |

## Implementation Phases

### Phase 1: Foundation
- Next.js project setup with Tailwind
- Supabase project + schema + RLS policies
- Clerk integration (sign-up/in, middleware, webhook)
- Seed script for questions + study material
- Dashboard page with navigation

### Phase 2: Study & Testing
- Study material pages (category list + content)
- Test engine (mock test, category test)
- Question display, answer selection, explanations
- Timer functionality
- Test results page with category breakdown

### Phase 3: Premium & Payments
- Stripe integration (checkout session, webhook)
- Premium gating on features
- Premium/pricing page
- Subscription management

### Phase 4: History & Review
- Test history page with stats and charts
- Missed question review mode
- Exam simulation mode (125Q/2hr)

### Phase 5: Polish & Deploy
- Landing page
- Responsive design (mobile-friendly)
- Error handling and loading states
- Deploy to Vercel + connect abo.corstellaris.com domain
