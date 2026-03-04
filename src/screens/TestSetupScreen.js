import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

const QUESTION_COUNTS = [20, 30, 50, 75, 100];

export default function TestSetupScreen({ navigation }) {
  const [selectedCount, setSelectedCount] = useState(50);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Mock Test Setup</Text>
      <Text style={styles.subtitle}>
        Configure your practice exam. Questions will be drawn from all ABO
        categories with randomized answers. Math questions will have new
        scenarios each time.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Number of Questions</Text>
        <View style={styles.optionRow}>
          {QUESTION_COUNTS.map((count) => (
            <TouchableOpacity
              key={count}
              style={[
                styles.optionButton,
                selectedCount === count && styles.optionButtonActive,
              ]}
              onPress={() => setSelectedCount(count)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedCount === count && styles.optionTextActive,
                ]}
              >
                {count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>What to Expect</Text>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Questions from all 8 ABO categories
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Answer choices are shuffled each time
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Math problems have varied scenarios
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Detailed explanations after each question
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.infoText}>
            Results are saved to your test history
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() =>
          navigation.navigate('TestEngine', {
            mode: 'full',
            numQuestions: selectedCount,
          })
        }
        activeOpacity={0.7}
      >
        <Text style={styles.startButtonText}>Start Mock Test</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...FONTS.subheading,
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: COLORS.card,
    borderWidth: 2,
    borderColor: COLORS.border,
    ...SHADOWS.card,
  },
  optionButtonActive: {
    borderColor: COLORS.primary,
    backgroundColor: '#EBF5FB',
  },
  optionText: {
    ...FONTS.bold,
    color: COLORS.textLight,
  },
  optionTextActive: {
    color: COLORS.primary,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
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
  startButton: {
    backgroundColor: COLORS.primary,
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
