import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';
import { isPremium } from '../utils/premium';

const QUESTION_COUNTS = [20, 30, 50, 75];
const TIME_LIMITS = [
  { label: '15 min', minutes: 15 },
  { label: '30 min', minutes: 30 },
  { label: '45 min', minutes: 45 },
  { label: '60 min', minutes: 60 },
  { label: '90 min', minutes: 90 },
];

export default function TestSetupScreen({ navigation }) {
  const [selectedCount, setSelectedCount] = useState(20);
  const [timedEnabled, setTimedEnabled] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(60);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    isPremium().then(setPremium);
  }, []);

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
          {QUESTION_COUNTS.map((count) => {
            const locked = !premium && count > 30;
            return (
              <TouchableOpacity
                key={count}
                style={[
                  styles.optionButton,
                  selectedCount === count && styles.optionButtonActive,
                  locked && styles.optionButtonLocked,
                ]}
                onPress={() => {
                  if (locked) {
                    Alert.alert(
                      'Premium Feature',
                      `${count}-question tests require Premium. Upgrade to unlock!`,
                      [
                        { text: 'Not Now', style: 'cancel' },
                        { text: 'Go Premium', onPress: () => navigation.navigate('Premium') },
                      ]
                    );
                  } else {
                    setSelectedCount(count);
                  }
                }}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedCount === count && styles.optionTextActive,
                    locked && styles.optionTextLocked,
                  ]}
                >
                  {count}{locked ? ' 🔒' : ''}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.timedHeaderRow}>
          <Text style={styles.sectionTitle}>Timed Test</Text>
          <Switch
            value={timedEnabled}
            onValueChange={setTimedEnabled}
            trackColor={{ false: '#D5D8DC', true: '#AED6F1' }}
            thumbColor={timedEnabled ? COLORS.primary : '#F4F6F7'}
          />
        </View>
        <Text style={styles.timedDescription}>
          {timedEnabled
            ? 'A countdown timer will be displayed. The test auto-submits when time runs out.'
            : 'No time limit. Answer at your own pace.'}
        </Text>
        {timedEnabled && (
          <View style={styles.optionRow}>
            {TIME_LIMITS.map((tl) => (
              <TouchableOpacity
                key={tl.minutes}
                style={[
                  styles.optionButton,
                  selectedMinutes === tl.minutes && styles.optionButtonActive,
                ]}
                onPress={() => setSelectedMinutes(tl.minutes)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedMinutes === tl.minutes && styles.optionTextActive,
                  ]}
                >
                  {tl.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
        {timedEnabled && (
          <View style={styles.infoRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.infoText}>
              Timer counts down -- unanswered questions are marked skipped when time expires
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() =>
          navigation.navigate('TestEngine', {
            mode: 'full',
            numQuestions: selectedCount,
            timeLimitMinutes: timedEnabled ? selectedMinutes : null,
          })
        }
        activeOpacity={0.7}
      >
        <Text style={styles.startButtonText}>
          {timedEnabled
            ? `Start Timed Test (${selectedMinutes} min)`
            : 'Start Mock Test'}
        </Text>
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
  timedHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  timedDescription: {
    ...FONTS.regular,
    color: COLORS.textLight,
    fontSize: 13,
    lineHeight: 18,
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
  optionButtonLocked: {
    borderColor: COLORS.border,
    backgroundColor: '#F8F9FA',
    opacity: 0.7,
  },
  optionTextLocked: {
    color: COLORS.textLight,
  },
});
