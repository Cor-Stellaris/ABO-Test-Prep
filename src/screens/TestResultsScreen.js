import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/categories';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function TestResultsScreen({ route, navigation }) {
  const { result } = route.params;
  const { correct, incorrect, skipped, totalQuestions, score, categoryResults } = result;

  const passed = score >= 70;

  const getCategoryName = (catId) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat ? cat.name : catId;
  };

  // Sort categories by performance (worst first)
  const sortedCategories = Object.entries(categoryResults).sort((a, b) => {
    const aScore = a[1].total > 0 ? a[1].correct / a[1].total : 0;
    const bScore = b[1].total > 0 ? b[1].correct / b[1].total : 0;
    return aScore - bScore;
  });

  const weakCategories = sortedCategories.filter(([, data]) => {
    return data.total > 0 && (data.correct / data.total) < 0.7;
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Score Header */}
      <View style={[styles.scoreCard, passed ? styles.passCard : styles.failCard]}>
        <Text style={styles.scoreLabel}>Your Score</Text>
        <Text style={styles.scoreValue}>{score}%</Text>
        <Text style={styles.scoreSubtext}>
          {correct} correct out of {totalQuestions} questions
        </Text>
        <View style={[styles.resultBadge, passed ? styles.passBadge : styles.failBadge]}>
          <Text style={styles.resultBadgeText}>
            {passed ? 'PASSING' : 'NEEDS IMPROVEMENT'}
          </Text>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={[styles.statBox, { borderBottomColor: COLORS.correct }]}>
          <Text style={[styles.statNumber, { color: COLORS.correct }]}>{correct}</Text>
          <Text style={styles.statLabel}>Correct</Text>
        </View>
        <View style={[styles.statBox, { borderBottomColor: COLORS.incorrect }]}>
          <Text style={[styles.statNumber, { color: COLORS.incorrect }]}>{incorrect}</Text>
          <Text style={styles.statLabel}>Incorrect</Text>
        </View>
        <View style={[styles.statBox, { borderBottomColor: COLORS.skipped }]}>
          <Text style={[styles.statNumber, { color: COLORS.textLight }]}>{skipped}</Text>
          <Text style={styles.statLabel}>Skipped</Text>
        </View>
      </View>

      {/* Category Breakdown */}
      <Text style={styles.sectionTitle}>Performance by Category</Text>
      {sortedCategories.map(([catId, data]) => {
        const catScore = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const barColor = catScore >= 70 ? COLORS.correct : catScore >= 50 ? COLORS.warning : COLORS.incorrect;
        return (
          <View key={catId} style={styles.categoryRow}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName} numberOfLines={1}>
                {getCategoryName(catId)}
              </Text>
              <Text style={[styles.categoryScore, { color: barColor }]}>
                {data.correct}/{data.total} ({catScore}%)
              </Text>
            </View>
            <View style={styles.barBackground}>
              <View
                style={[
                  styles.barFill,
                  { width: `${catScore}%`, backgroundColor: barColor },
                ]}
              />
            </View>
          </View>
        );
      })}

      {/* Areas to Improve */}
      {weakCategories.length > 0 && (
        <View style={styles.improvementCard}>
          <Text style={styles.improvementTitle}>Areas to Focus On</Text>
          <Text style={styles.improvementSubtext}>
            These categories scored below 70%. Review the study material and retake category-specific tests.
          </Text>
          {weakCategories.map(([catId, data]) => {
            const catScore = Math.round((data.correct / data.total) * 100);
            return (
              <View key={catId} style={styles.improvementRow}>
                <Text style={styles.improvementBullet}>!</Text>
                <Text style={styles.improvementText}>
                  {getCategoryName(catId)} ({catScore}%)
                </Text>
              </View>
            );
          })}
        </View>
      )}

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.primaryButtonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('TestHistory')}
        >
          <Text style={styles.secondaryButtonText}>View Test History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  scoreCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    ...SHADOWS.card,
  },
  passCard: {
    backgroundColor: '#27AE60',
  },
  failCard: {
    backgroundColor: '#E74C3C',
  },
  scoreLabel: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  scoreValue: {
    color: COLORS.textWhite,
    fontSize: 56,
    fontWeight: 'bold',
  },
  scoreSubtext: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    marginTop: 4,
  },
  resultBadge: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  passBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  failBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  resultBadgeText: {
    color: COLORS.textWhite,
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    borderBottomWidth: 3,
    ...SHADOWS.card,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    ...FONTS.small,
    marginTop: 4,
  },
  sectionTitle: {
    ...FONTS.subheading,
    marginBottom: 12,
  },
  categoryRow: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    ...SHADOWS.card,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryName: {
    ...FONTS.regular,
    fontSize: 14,
    flex: 1,
    marginRight: 8,
  },
  categoryScore: {
    ...FONTS.bold,
    fontSize: 13,
  },
  barBackground: {
    height: 8,
    backgroundColor: '#EAECEE',
    borderRadius: 4,
  },
  barFill: {
    height: 8,
    borderRadius: 4,
  },
  improvementCard: {
    backgroundColor: '#FDEDEC',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#F5B7B1',
  },
  improvementTitle: {
    ...FONTS.bold,
    color: COLORS.danger,
    marginBottom: 4,
  },
  improvementSubtext: {
    ...FONTS.small,
    color: COLORS.text,
    marginBottom: 10,
  },
  improvementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  improvementBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.danger,
    color: COLORS.textWhite,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 8,
  },
  improvementText: {
    ...FONTS.regular,
    fontSize: 14,
  },
  actions: {
    marginTop: 24,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  primaryButtonText: {
    ...FONTS.button,
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    ...FONTS.bold,
    color: COLORS.primary,
    fontSize: 16,
  },
});
