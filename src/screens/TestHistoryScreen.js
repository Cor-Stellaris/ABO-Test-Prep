import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getTestHistory, clearTestHistory } from '../utils/storage';
import { CATEGORIES } from '../data/categories';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

const screenWidth = Dimensions.get('window').width;

export default function TestHistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
  );

  const loadHistory = async () => {
    const data = await getTestHistory();
    setHistory(data.reverse()); // newest first
    setLoading(false);
  };

  const handleClear = () => {
    Alert.alert(
      'Clear History',
      'This will permanently delete all test history. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: async () => {
            await clearTestHistory();
            setHistory([]);
          },
        },
      ]
    );
  };

  const getCategoryName = (catId) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat ? cat.name : catId;
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  // Compute aggregate stats
  const totalTests = history.length;
  const avgScore =
    totalTests > 0
      ? Math.round(history.reduce((sum, h) => sum + h.score, 0) / totalTests)
      : 0;
  const bestScore =
    totalTests > 0 ? Math.max(...history.map(h => h.score)) : 0;

  // Aggregate category performance across all tests
  const aggregateCats = {};
  history.forEach(h => {
    if (h.categoryResults) {
      Object.entries(h.categoryResults).forEach(([catId, data]) => {
        if (!aggregateCats[catId]) {
          aggregateCats[catId] = { correct: 0, total: 0 };
        }
        aggregateCats[catId].correct += data.correct;
        aggregateCats[catId].total += data.total;
      });
    }
  });

  const sortedAggregateCats = Object.entries(aggregateCats).sort((a, b) => {
    const aP = a[1].total > 0 ? a[1].correct / a[1].total : 0;
    const bP = b[1].total > 0 ? b[1].correct / b[1].total : 0;
    return aP - bP;
  });

  // Build simple score chart data (last 10 tests, oldest first)
  const chartTests = [...history].reverse().slice(-10);
  const maxBarHeight = 120;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading history...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Test History</Text>
        {history.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {history.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📊</Text>
          <Text style={styles.emptyTitle}>No Tests Yet</Text>
          <Text style={styles.emptyText}>
            Complete a mock test or category test to see your results here.
          </Text>
          <TouchableOpacity
            style={styles.takeTestButton}
            onPress={() => navigation.navigate('TestSetup')}
          >
            <Text style={styles.takeTestButtonText}>Take a Mock Test</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* Summary Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{totalTests}</Text>
              <Text style={styles.statLabel}>Tests Taken</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: COLORS.primary }]}>
                {avgScore}%
              </Text>
              <Text style={styles.statLabel}>Average</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: COLORS.correct }]}>
                {bestScore}%
              </Text>
              <Text style={styles.statLabel}>Best</Text>
            </View>
          </View>

          {/* Score Trend Chart */}
          {chartTests.length > 1 && (
            <View style={styles.chartCard}>
              <Text style={styles.chartTitle}>Score Trend (Last {chartTests.length} Tests)</Text>
              <View style={styles.chartContainer}>
                <View style={styles.chartYAxis}>
                  <Text style={styles.chartYLabel}>100%</Text>
                  <Text style={styles.chartYLabel}>70%</Text>
                  <Text style={styles.chartYLabel}>50%</Text>
                  <Text style={styles.chartYLabel}>0%</Text>
                </View>
                <View style={styles.chartBars}>
                  {/* Passing line at 70% */}
                  <View
                    style={[
                      styles.passingLine,
                      { bottom: maxBarHeight * 0.7 },
                    ]}
                  />
                  {chartTests.map((test, index) => {
                    const barHeight = Math.max(
                      4,
                      (test.score / 100) * maxBarHeight
                    );
                    const barColor =
                      test.score >= 70 ? COLORS.correct : COLORS.incorrect;
                    return (
                      <View key={index} style={styles.barColumn}>
                        <Text style={styles.barLabel}>{test.score}%</Text>
                        <View
                          style={[
                            styles.bar,
                            {
                              height: barHeight,
                              backgroundColor: barColor,
                            },
                          ]}
                        />
                        <Text style={styles.barIndex}>#{history.length - (chartTests.length - 1 - index)}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={styles.passingLegend}>
                <View style={styles.passingLineSmall} />
                <Text style={styles.passingLegendText}>
                  70% Passing Threshold
                </Text>
              </View>
            </View>
          )}

          {/* Category Performance */}
          {sortedAggregateCats.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>
                Overall Category Performance
              </Text>
              {sortedAggregateCats.map(([catId, data]) => {
                const pct = Math.round((data.correct / data.total) * 100);
                const color =
                  pct >= 70
                    ? COLORS.correct
                    : pct >= 50
                      ? COLORS.warning
                      : COLORS.incorrect;
                return (
                  <View key={catId} style={styles.catRow}>
                    <View style={styles.catHeader}>
                      <Text style={styles.catName} numberOfLines={1}>
                        {getCategoryName(catId)}
                      </Text>
                      <Text style={[styles.catPct, { color }]}>
                        {pct}% ({data.correct}/{data.total})
                      </Text>
                    </View>
                    <View style={styles.catBarBg}>
                      <View
                        style={[
                          styles.catBarFill,
                          { width: `${pct}%`, backgroundColor: color },
                        ]}
                      />
                    </View>
                  </View>
                );
              })}
            </>
          )}

          {/* Individual Test History */}
          <Text style={styles.sectionTitle}>All Tests</Text>
          {history.map((test, index) => (
            <View key={test.id || index} style={styles.historyCard}>
              <View style={styles.historyHeader}>
                <View>
                  <Text style={styles.historyType}>
                    {test.mode === 'category'
                      ? test.categoryName
                      : 'Full Mock Test'}
                  </Text>
                  <Text style={styles.historyDate}>
                    {formatDate(test.date)}
                  </Text>
                </View>
                <View
                  style={[
                    styles.historyScoreBadge,
                    {
                      backgroundColor:
                        test.score >= 70 ? '#D5F5E3' : '#FADBD8',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.historyScore,
                      {
                        color:
                          test.score >= 70
                            ? COLORS.correct
                            : COLORS.incorrect,
                      },
                    ]}
                  >
                    {test.score}%
                  </Text>
                </View>
              </View>
              <View style={styles.historyStats}>
                <Text style={styles.historyStat}>
                  {test.correct} correct
                </Text>
                <Text style={styles.historyStatSep}>|</Text>
                <Text style={styles.historyStat}>
                  {test.incorrect} incorrect
                </Text>
                <Text style={styles.historyStatSep}>|</Text>
                <Text style={styles.historyStat}>
                  {test.totalQuestions} total
                </Text>
              </View>
            </View>
          ))}
        </>
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...FONTS.subheading,
    color: COLORS.textLight,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    ...FONTS.heading,
  },
  clearButton: {
    ...FONTS.bold,
    color: COLORS.danger,
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    ...FONTS.subheading,
    marginBottom: 8,
  },
  emptyText: {
    ...FONTS.regular,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 24,
  },
  takeTestButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  takeTestButtonText: {
    ...FONTS.button,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    ...FONTS.small,
    marginTop: 4,
  },
  chartCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    ...SHADOWS.card,
  },
  chartTitle: {
    ...FONTS.bold,
    color: COLORS.primary,
    marginBottom: 12,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
  },
  chartYAxis: {
    justifyContent: 'space-between',
    marginRight: 8,
    paddingBottom: 18,
  },
  chartYLabel: {
    fontSize: 10,
    color: COLORS.textLight,
  },
  chartBars: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    position: 'relative',
    paddingBottom: 18,
  },
  passingLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: COLORS.warning,
    borderStyle: 'dashed',
  },
  barColumn: {
    alignItems: 'center',
    flex: 1,
  },
  barLabel: {
    fontSize: 9,
    color: COLORS.textLight,
    marginBottom: 2,
    fontWeight: '600',
  },
  bar: {
    width: 20,
    borderRadius: 4,
    minHeight: 4,
  },
  barIndex: {
    fontSize: 9,
    color: COLORS.textLight,
    marginTop: 4,
  },
  passingLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  passingLineSmall: {
    width: 20,
    height: 2,
    backgroundColor: COLORS.warning,
    marginRight: 6,
  },
  passingLegendText: {
    fontSize: 11,
    color: COLORS.textLight,
  },
  sectionTitle: {
    ...FONTS.subheading,
    marginBottom: 12,
  },
  catRow: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    ...SHADOWS.card,
  },
  catHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  catName: {
    ...FONTS.regular,
    fontSize: 13,
    flex: 1,
    marginRight: 8,
  },
  catPct: {
    ...FONTS.bold,
    fontSize: 13,
  },
  catBarBg: {
    height: 6,
    backgroundColor: '#EAECEE',
    borderRadius: 3,
  },
  catBarFill: {
    height: 6,
    borderRadius: 3,
  },
  historyCard: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    ...SHADOWS.card,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyType: {
    ...FONTS.bold,
    fontSize: 14,
  },
  historyDate: {
    ...FONTS.small,
    marginTop: 2,
  },
  historyScoreBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  historyScore: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  historyStats: {
    flexDirection: 'row',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  historyStat: {
    ...FONTS.small,
    fontSize: 12,
  },
  historyStatSep: {
    ...FONTS.small,
    marginHorizontal: 8,
    color: COLORS.border,
  },
});
