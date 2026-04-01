'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: string;
  category_id: string;
  question: string;
  choices: string[];
  correct_index: number;
  explanation: string;
}

interface TestEngineProps {
  testId: string;
  questions: Question[];
  timeLimitMinutes: number | null;
}

export default function TestEngine({ testId, questions, timeLimitMinutes }: TestEngineProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    timeLimitMinutes ? timeLimitMinutes * 60 : null
  );
  const [startTime] = useState(Date.now());

  const submitTest = useCallback(async () => {
    setSubmitting(true);
    const timeUsedSeconds = Math.round((Date.now() - startTime) / 1000);
    await fetch('/api/test/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ testId, answers, timeUsedSeconds }),
    });
    router.push(`/test/${testId}/results`);
  }, [testId, answers, startTime, router]);

  // Timer
  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) {
      submitTest();
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, submitTest]);

  const question = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];

  function selectAnswer(choiceIndex: number) {
    if (showExplanation) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = choiceIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
  }

  function nextQuestion() {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function skipQuestion() {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  const isLast = currentIndex === questions.length - 1;
  const answeredCount = answers.filter((a) => a !== null).length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-2 text-sm text-[var(--color-text-light)]">
        <span>Question {currentIndex + 1} of {questions.length}</span>
        <div className="flex items-center gap-4">
          <span>{answeredCount} answered</span>
          {secondsLeft !== null && (
            <span className={`font-mono font-semibold ${secondsLeft < 60 ? 'text-[var(--color-danger)]' : ''}`}>
              {formatTime(secondsLeft)}
            </span>
          )}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-[var(--color-primary)] h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <p className="text-lg font-medium mb-6">{question.question}</p>

        <div className="space-y-3">
          {question.choices.map((choice, i) => {
            let borderColor = 'border-gray-200';
            let bgColor = '';

            if (showExplanation) {
              if (i === question.correct_index) {
                borderColor = 'border-[var(--color-success)]';
                bgColor = 'bg-green-50';
              } else if (i === selectedAnswer && i !== question.correct_index) {
                borderColor = 'border-[var(--color-danger)]';
                bgColor = 'bg-red-50';
              }
            } else if (selectedAnswer === i) {
              borderColor = 'border-[var(--color-primary)]';
              bgColor = 'bg-blue-50';
            }

            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                disabled={showExplanation}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition ${borderColor} ${bgColor} ${
                  !showExplanation ? 'hover:border-gray-300' : ''
                }`}
              >
                <span className="font-medium text-[var(--color-text-light)] mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {choice}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-4 p-4 rounded-lg text-sm ${
            selectedAnswer === question.correct_index
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className="font-semibold mb-1">
              {selectedAnswer === question.correct_index ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p>{question.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        {!showExplanation ? (
          <button
            onClick={skipQuestion}
            className="px-6 py-2 rounded-lg border border-gray-300 text-[var(--color-text-light)] hover:bg-gray-50 transition"
          >
            Skip
          </button>
        ) : (
          <div />
        )}

        {showExplanation && !isLast && (
          <button
            onClick={nextQuestion}
            className="px-6 py-2 rounded-lg bg-[var(--color-secondary)] text-white font-semibold hover:opacity-90 transition"
          >
            Next Question →
          </button>
        )}

        {(isLast && showExplanation) || answeredCount === questions.length ? (
          <button
            onClick={submitTest}
            disabled={submitting}
            className="px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Finish Test'}
          </button>
        ) : null}
      </div>

      {/* Finish early button */}
      {!isLast && answeredCount > 0 && showExplanation && (
        <div className="text-center mt-6">
          <button
            onClick={submitTest}
            disabled={submitting}
            className="text-sm text-[var(--color-text-light)] hover:underline"
          >
            Finish test early ({answeredCount}/{questions.length} answered)
          </button>
        </div>
      )}
    </div>
  );
}
