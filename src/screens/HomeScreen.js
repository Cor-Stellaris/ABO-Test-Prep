import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function HomeScreen({ navigation }) {
  const menuItems = [
    {
      title: 'Study Material',
      subtitle: 'Review ABO topics by category',
      icon: '📚',
      screen: 'StudyCategories',
      color: COLORS.primary,
    },
    {
      title: 'Mock Test',
      subtitle: 'Take a full practice exam',
      icon: '📝',
      screen: 'TestSetup',
      color: COLORS.secondary,
    },
    {
      title: 'Practice by Category',
      subtitle: 'Focus on specific topics',
      icon: '🎯',
      screen: 'CategoryTest',
      color: COLORS.accent,
    },
    {
      title: 'Test History',
      subtitle: 'Review past results & progress',
      icon: '📊',
      screen: 'TestHistory',
      color: '#8E44AD',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ABO Prep</Text>
        <Text style={styles.headerSubtitle}>
          Basic ABO Certification Study Tool
        </Text>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.welcome}>
          Master the fundamentals of opticianry and ace your ABO certification exam.
        </Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { borderLeftColor: item.color }]}
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Study Tip</Text>
          <Text style={styles.tipText}>
            Start with the Study Material to build your foundation, then test
            your knowledge with Mock Tests. Review your Test History to identify
            weak areas and focus your study time effectively.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textWhite,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  welcome: {
    ...FONTS.regular,
    color: COLORS.textLight,
    marginBottom: 20,
    lineHeight: 22,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 14,
    borderLeftWidth: 4,
    ...SHADOWS.card,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    ...FONTS.subheading,
  },
  cardSubtitle: {
    ...FONTS.small,
    marginTop: 2,
  },
  arrow: {
    fontSize: 28,
    color: COLORS.textLight,
    fontWeight: '300',
  },
  tipCard: {
    backgroundColor: '#EBF5FB',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#AED6F1',
  },
  tipTitle: {
    ...FONTS.bold,
    color: COLORS.primary,
    marginBottom: 6,
  },
  tipText: {
    ...FONTS.small,
    color: COLORS.text,
    lineHeight: 20,
  },
});
