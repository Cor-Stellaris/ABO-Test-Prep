import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { generateMockTest, generateCategoryTest } from '../data/questions';
import { saveTestResult } from '../utils/storage';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function TestEngineScreen({ route, navigation }) {
  const {
    mode,
    numQuestions = 50,
    categoryId,
    categoryName,
    timeLimitMinutes,
    questions: reviewQuestions = null,
    answers: reviewAnswers = null,
  } = route.params;
  const isReview = mode === 'review';
  const isExamSim = mode === 'exam_sim';
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [testComplete, setTestComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null); // seconds
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  const answersRef = useRef([]);
  const questionsRef = useRef([]);
  const testCompleteRef = useRef(false);

  // Keep refs in sync with state so timer callback sees latest values
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    questionsRef.current = questions;
  }, [questions]);

  useEffect(() => {
    testCompleteRef.current = testComplete;
  }, [testComplete]);

  useEffect(() => {
    let q;
    if (isReview && reviewQuestions) {
      // Filter to only missed questions
      const missed = reviewQuestions
        .map((question, i) => ({ question, userAnswer: reviewAnswers[i] }))
        .filter(({ question, userAnswer }) =>
          userAnswer !== -1 && userAnswer !== null && userAnswer !== question.correctIndex
        );
      q = missed.map(({ question }) => question);
      setAnswers(missed.map(({ userAnswer }) => userAnswer));
      setShowExplanation(true);
      setSelectedAnswer(missed.length > 0 ? missed[0].userAnswer : null);
    } else if (mode === 'category') {
      q = generateCategoryTest(categoryId);
      setAnswers(new Array(q.length).fill(null));
    } else {
      q = generateMockTest(numQuestions);
      setAnswers(new Array(q.length).fill(null));
    }
    setQuestions(q);

    // Initialize timer if timed test (not in review mode)
    if (timeLimitMinutes && !isReview) {
      setTimeRemaining(timeLimitMinutes * 60);
    }
  }, []);

  // Sync review mode state when navigating between questions
  useEffect(() => {
    if (isReview && answers.length > 0) {
      setSelectedAnswer(answers[currentIndex]);
      setShowExplanation(true);
    }
  }, [currentIndex, isReview]);

  // Countdown timer effect
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timeRemaining !== null && timeRemaining > 0]);

  // Auto-submit when timer reaches 0
  useEffect(() => {
    if (timeRemaining === 0 && !testCompleteRef.current && questionsRef.current.length > 0) {
      finishTestOnTimeout();
    }
  }, [timeRemaining]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeRemaining === null) return COLORS.text;
    if (timeRemaining <= 60) return COLORS.danger;
    if (timeRemaining <= 300) return COLORS.warning;
    return COLORS.text;
  };

  const currentQuestion = questions[currentIndex];

  const handleSelectAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) {
      Alert.alert('Select an Answer', 'Please choose an answer before continuing.');
      return;
    }
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (isExamSim) {
      // In exam sim: no explanation, go straight to next
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        scrollRef.current?.scrollTo({ y: 0, animated: true });
      } else {
        finishTest();
      }
    } else {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      finishTest();
    }
  };

  const handleSkip = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = -1; // skipped
    setAnswers(newAnswers);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      finishTest();
    }
  };

  const finishTestOnTimeout = async () => {
    if (testCompleteRef.current) return;
    // Use refs to get the latest values
    const finalAnswers = [...answersRef.current];
    const qs = questionsRef.current;
    // Mark all unanswered as skipped
    for (let i = 0; i < finalAnswers.length; i++) {
      if (finalAnswers[i] === null) finalAnswers[i] = -1;
    }

    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    const categoryResults = {};

    qs.forEach((q, i) => {
      const cat = q.category;
      if (!categoryResults[cat]) {
        categoryResults[cat] = { correct: 0, total: 0, incorrect: 0 };
      }
      categoryResults[cat].total++;

      if (finalAnswers[i] === -1) {
        skipped++;
      } else if (finalAnswers[i] === q.correctIndex) {
        correct++;
        categoryResults[cat].correct++;
      } else {
        incorrect++;
        categoryResults[cat].incorrect++;
      }
    });

    const result = {
      mode,
      categoryId: categoryId || 'all',
      categoryName: categoryName || 'Full Mock Test',
      totalQuestions: qs.length,
      correct,
      incorrect,
      skipped,
      score: Math.round((correct / qs.length) * 100),
      categoryResults,
      answers: finalAnswers,
      questions: qs.map((q) => ({
        id: q.id, category: q.category, question: q.question,
        choices: q.choices, correctIndex: q.correctIndex, explanation: q.explanation,
      })),
      timeLimitMinutes: timeLimitMinutes || null,
      timeExpired: true,
    };

    await saveTestResult(result);
    setTestComplete(true);

    navigation.replace('TestResults', { result });
  };

  const finishTest = async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const finalAnswers = [...answers];
    // Mark current as skipped if not answered
    if (finalAnswers[currentIndex] === null) {
      finalAnswers[currentIndex] = -1;
    }

    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    const categoryResults = {};

    questions.forEach((q, i) => {
      const cat = q.category;
      if (!categoryResults[cat]) {
        categoryResults[cat] = { correct: 0, total: 0, incorrect: 0 };
      }
      categoryResults[cat].total++;

      if (finalAnswers[i] === -1 || finalAnswers[i] === null) {
        skipped++;
      } else if (finalAnswers[i] === q.correctIndex) {
        correct++;
        categoryResults[cat].correct++;
      } else {
        incorrect++;
        categoryResults[cat].incorrect++;
      }
    });

    const timeUsed = timeLimitMinutes
      ? timeLimitMinutes * 60 - (timeRemaining || 0)
      : null;

    const result = {
      mode,
      categoryId: categoryId || 'all',
      categoryName: categoryName || 'Full Mock Test',
      totalQuestions: questions.length,
      correct,
      incorrect,
      skipped,
      score: Math.round((correct / questions.length) * 100),
      categoryResults,
      answers: finalAnswers,
      questions: questions.map((q) => ({
        id: q.id, category: q.category, question: q.question,
        choices: q.choices, correctIndex: q.correctIndex, explanation: q.explanation,
      })),
      timeLimitMinutes: timeLimitMinutes || null,
      timeUsedSeconds: timeUsed,
      timeExpired: false,
    };

    await saveTestResult(result);
    setTestComplete(true);

    navigation.replace('TestResults', { result });
  };

  const handleQuit = () => {
    Alert.alert(
      'Quit Test',
      'Are you sure you want to quit? Your progress will not be saved.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Quit',
          style: 'destructive',
          onPress: () => {
            if (timerRef.current) clearInterval(timerRef.current);
            navigation.goBack();
          },
        },
      ]
    );
  };

  if (!currentQuestion) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Preparing your test...</Text>
      </View>
    );
  }

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      {/* Progress Bar & Timer */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <View style={styles.progressInfoRow}>
          <Text style={styles.progressText}>
            {currentIndex + 1} of {questions.length}
          </Text>
          {timeRemaining !== null && (
            <Text style={[styles.timerText, { color: getTimerColor() }]}>
              {timeRemaining <= 60 ? '!! ' : ''}
              {formatTime(timeRemaining)}
              {timeRemaining <= 60 ? ' !!' : ''}
            </Text>
          )}
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Question */}
        <View style={styles.questionCard}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>
              {currentQuestion.category.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        {/* Answer Choices */}
        {currentQuestion.choices.map((choice, index) => {
          let choiceStyle = styles.choiceButton;
          let choiceTextStyle = styles.choiceText;

          if (showExplanation) {
            if (index === currentQuestion.correctIndex) {
              choiceStyle = [styles.choiceButton, styles.correctChoice];
              choiceTextStyle = [styles.choiceText, styles.correctChoiceText];
            } else if (
              index === selectedAnswer &&
              index !== currentQuestion.correctIndex
            ) {
              choiceStyle = [styles.choiceButton, styles.incorrectChoice];
              choiceTextStyle = [styles.choiceText, styles.incorrectChoiceText];
            }
          } else if (index === selectedAnswer) {
            choiceStyle = [styles.choiceButton, styles.selectedChoice];
            choiceTextStyle = [styles.choiceText, styles.selectedChoiceText];
          }

          return (
            <TouchableOpacity
              key={index}
              style={choiceStyle}
              onPress={() => handleSelectAnswer(index)}
              activeOpacity={0.7}
              disabled={showExplanation}
            >
              <View style={styles.choiceRow}>
                <View
                  style={[
                    styles.choiceLetter,
                    showExplanation &&
                      index === currentQuestion.correctIndex &&
                      styles.correctLetter,
                    showExplanation &&
                      index === selectedAnswer &&
                      index !== currentQuestion.correctIndex &&
                      styles.incorrectLetter,
                    !showExplanation &&
                      index === selectedAnswer &&
                      styles.selectedLetter,
                  ]}
                >
                  <Text
                    style={[
                      styles.choiceLetterText,
                      ((!showExplanation && index === selectedAnswer) ||
                        (showExplanation &&
                          (index === currentQuestion.correctIndex ||
                            index === selectedAnswer))) &&
                        styles.choiceLetterTextActive,
                    ]}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={choiceTextStyle}>{choice}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Explanation */}
        {showExplanation && (
          <View style={styles.explanationCard}>
            <Text style={styles.explanationTitle}>
              {selectedAnswer === currentQuestion.correctIndex
                ? 'Correct!'
                : 'Incorrect'}
            </Text>
            <Text style={styles.explanationText}>
              {currentQuestion.explanation}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomBar}>
        {isReview ? (
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={[styles.skipButton, currentIndex === 0 && { opacity: 0.4 }]}
              onPress={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                  scrollRef.current?.scrollTo({ y: 0, animated: true });
                }
              }}
              disabled={currentIndex === 0}
            >
              <Text style={styles.skipButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                if (currentIndex < questions.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                  scrollRef.current?.scrollTo({ y: 0, animated: true });
                } else {
                  navigation.goBack();
                }
              }}
            >
              <Text style={styles.nextButtonText}>
                {currentIndex < questions.length - 1 ? 'Next' : 'Done'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : !showExplanation ? (
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkip}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.confirmButton,
                selectedAnswer === null && styles.confirmButtonDisabled,
              ]}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.quitButton}
              onPress={handleQuit}
            >
              <Text style={styles.quitButtonText}>Quit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>
                {currentIndex < questions.length - 1
                  ? 'Next Question'
                  : 'Finish Test'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    ...FONTS.subheading,
    color: COLORS.textLight,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    marginBottom: 6,
  },
  progressFill: {
    height: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  progressInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    ...FONTS.small,
  },
  timerText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 20,
  },
  questionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    ...SHADOWS.card,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBF5FB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  questionText: {
    ...FONTS.regular,
    fontSize: 17,
    lineHeight: 24,
  },
  choiceButton: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.border,
    ...SHADOWS.card,
  },
  selectedChoice: {
    borderColor: COLORS.primary,
    backgroundColor: '#EBF5FB',
  },
  correctChoice: {
    borderColor: COLORS.correct,
    backgroundColor: '#EAFAF1',
  },
  incorrectChoice: {
    borderColor: COLORS.incorrect,
    backgroundColor: '#FDEDEC',
  },
  choiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  choiceLetter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectedLetter: {
    backgroundColor: COLORS.primary,
  },
  correctLetter: {
    backgroundColor: COLORS.correct,
  },
  incorrectLetter: {
    backgroundColor: COLORS.incorrect,
  },
  choiceLetterText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.textLight,
  },
  choiceLetterTextActive: {
    color: COLORS.textWhite,
  },
  choiceText: {
    ...FONTS.regular,
    fontSize: 15,
    flex: 1,
  },
  selectedChoiceText: {
    color: COLORS.primary,
  },
  correctChoiceText: {
    color: COLORS.correct,
    fontWeight: '600',
  },
  incorrectChoiceText: {
    color: COLORS.incorrect,
  },
  explanationCard: {
    backgroundColor: '#FDFEFE',
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#D5F5E3',
  },
  explanationTitle: {
    ...FONTS.bold,
    fontSize: 16,
    marginBottom: 6,
    color: COLORS.secondary,
  },
  explanationText: {
    ...FONTS.regular,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text,
  },
  bottomBar: {
    backgroundColor: COLORS.card,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  bottomRow: {
    flexDirection: 'row',
    gap: 12,
  },
  skipButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  skipButtonText: {
    ...FONTS.bold,
    color: COLORS.textLight,
  },
  confirmButton: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  confirmButtonText: {
    ...FONTS.button,
    fontSize: 16,
  },
  quitButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.danger,
    alignItems: 'center',
  },
  quitButtonText: {
    ...FONTS.bold,
    color: COLORS.danger,
  },
  nextButton: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
  },
  nextButtonText: {
    ...FONTS.button,
    fontSize: 16,
  },
});
