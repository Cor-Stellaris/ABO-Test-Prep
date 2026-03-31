import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  TextInput,
} from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';
import { isPremium, activatePremium } from '../utils/premium';

// Replace with your actual Stripe Payment Link from dashboard.stripe.com
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/your_link_here';

export default function PremiumScreen({ navigation }) {
  const [premiumActive, setPremiumActive] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);

  useEffect(() => {
    isPremium().then(setPremiumActive);
  }, []);

  const handlePurchase = () => {
    Linking.openURL(STRIPE_PAYMENT_LINK).catch(() => {
      Alert.alert('Error', 'Could not open payment page. Please try again.');
    });
  };

  const handleActivate = async () => {
    const trimmed = activationCode.trim().toUpperCase();
    if (trimmed.length >= 8) {
      await activatePremium(365);
      setPremiumActive(true);
      Alert.alert('Welcome to Premium!', 'All features are now unlocked.');
    } else {
      Alert.alert('Invalid Code', 'Please enter a valid activation code.');
    }
  };

  if (premiumActive) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.activeCard}>
          <Text style={styles.activeIcon}>✓</Text>
          <Text style={styles.activeTitle}>Premium Active</Text>
          <Text style={styles.activeSubtext}>
            You have full access to all features.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Unlock Premium</Text>
      <Text style={styles.subtitle}>
        Get full access to everything you need to pass the ABO certification exam.
      </Text>

      <View style={styles.priceCard}>
        <Text style={styles.priceLabel}>Annual Access</Text>
        <Text style={styles.priceValue}>$29.99</Text>
        <Text style={styles.priceSubtext}>per year</Text>
      </View>

      <View style={styles.featuresCard}>
        <Text style={styles.featuresTitle}>Premium Includes</Text>
        {[
          'Full question bank (300+ questions)',
          'Exam Simulation mode (125 questions, 2-hour timer)',
          'Missed question review',
          'All math problem generators',
          'Unlimited mock tests (50, 75, 125 questions)',
          'Complete study material for all 8 categories',
        ].map((feature, i) => (
          <View key={i} style={styles.featureRow}>
            <Text style={styles.featureCheck}>✓</Text>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.freeCard}>
        <Text style={styles.freeTitle}>Free Tier</Text>
        {[
          '20-question mock tests',
          'Practice by category',
          'Study material',
          'Test history',
        ].map((feature, i) => (
          <View key={i} style={styles.featureRow}>
            <Text style={[styles.featureCheck, { color: COLORS.textLight }]}>•</Text>
            <Text style={[styles.featureText, { color: COLORS.textLight }]}>{feature}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.purchaseButton}
        onPress={handlePurchase}
        activeOpacity={0.7}
      >
        <Text style={styles.purchaseButtonText}>Subscribe Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.codeToggle}
        onPress={() => setShowCodeInput(!showCodeInput)}
      >
        <Text style={styles.codeToggleText}>Have an activation code?</Text>
      </TouchableOpacity>

      {showCodeInput && (
        <View style={styles.codeSection}>
          <TextInput
            style={styles.codeInput}
            placeholder="Enter activation code"
            value={activationCode}
            onChangeText={setActivationCode}
            autoCapitalize="characters"
          />
          <TouchableOpacity style={styles.activateButton} onPress={handleActivate}>
            <Text style={styles.activateButtonText}>Activate</Text>
          </TouchableOpacity>
        </View>
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
  heading: {
    ...FONTS.heading,
    fontSize: 26,
    marginBottom: 8,
  },
  subtitle: {
    ...FONTS.regular,
    color: COLORS.textLight,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  priceCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    ...SHADOWS.card,
  },
  priceLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    fontWeight: '600',
  },
  priceValue: {
    color: COLORS.textWhite,
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  priceSubtext: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  featuresCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    ...SHADOWS.card,
  },
  featuresTitle: {
    ...FONTS.bold,
    color: COLORS.primary,
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  featureCheck: {
    fontSize: 16,
    color: COLORS.success,
    fontWeight: 'bold',
    marginRight: 10,
    width: 20,
  },
  featureText: {
    ...FONTS.regular,
    fontSize: 14,
    flex: 1,
  },
  freeCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  freeTitle: {
    ...FONTS.bold,
    color: COLORS.textLight,
    marginBottom: 12,
  },
  purchaseButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  purchaseButtonText: {
    ...FONTS.button,
    fontSize: 18,
  },
  codeToggle: {
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  codeToggleText: {
    ...FONTS.regular,
    color: COLORS.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  codeSection: {
    marginTop: 12,
    gap: 10,
  },
  codeInput: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    borderWidth: 2,
    borderColor: COLORS.border,
    letterSpacing: 2,
    textAlign: 'center',
  },
  activateButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  activateButtonText: {
    ...FONTS.button,
  },
  activeCard: {
    backgroundColor: COLORS.success,
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  activeIcon: {
    fontSize: 48,
    color: COLORS.textWhite,
    marginBottom: 8,
  },
  activeTitle: {
    ...FONTS.heading,
    color: COLORS.textWhite,
    fontSize: 24,
  },
  activeSubtext: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    marginTop: 4,
  },
  backButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  backButtonText: {
    ...FONTS.button,
    fontSize: 16,
  },
});
