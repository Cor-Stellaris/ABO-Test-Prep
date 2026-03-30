import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function ExamSimSetupScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>ABO Exam Simulation</Text>
      <Text style={styles.subtitle}>
        Experience the real exam format. This mode simulates the actual ABO/NOCE
        certification exam conditions.
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Exam Format</Text>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>125 questions (matching the real exam)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>2-hour time limit (120 minutes)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            No explanations during the test — results shown at the end
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Questions from all 8 ABO categories
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>70% passing score required</Text>
        </View>
      </View>

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>Before You Start</Text>
        <Text style={styles.warningText}>
          Set aside 2 uninterrupted hours. Once started, the timer cannot be
          paused. Treat this like the real exam — no notes, no references.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() =>
          navigation.navigate('TestEngine', {
            mode: 'exam_sim',
            numQuestions: 125,
            timeLimitMinutes: 120,
          })
        }
        activeOpacity={0.7}
      >
        <Text style={styles.startButtonText}>Start Exam Simulation</Text>
      </TouchableOpacity>
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
  heading: {
    ...FONTS.heading,
    marginBottom: 8,
  },
  subtitle: {
    ...FONTS.regular,
    color: COLORS.textLight,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    ...SHADOWS.card,
  },
  infoTitle: {
    ...FONTS.bold,
    color: COLORS.primary,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    ...FONTS.regular,
    color: COLORS.primary,
    marginRight: 8,
    fontSize: 14,
  },
  infoText: {
    ...FONTS.regular,
    fontSize: 14,
    flex: 1,
  },
  warningCard: {
    backgroundColor: '#FEF9E7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F9E79F',
  },
  warningTitle: {
    ...FONTS.bold,
    color: COLORS.accent,
    marginBottom: 6,
  },
  warningText: {
    ...FONTS.regular,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text,
  },
  startButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  startButtonText: {
    ...FONTS.button,
    fontSize: 18,
  },
});
