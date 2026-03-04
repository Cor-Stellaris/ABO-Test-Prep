import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { CATEGORIES } from '../data/categories';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function CategoryTestScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Practice by Category</Text>
      <Text style={styles.subtitle}>
        Focus your practice on a specific topic. Each test will have randomized
        questions and answers.
      </Text>
      {CATEGORIES.map((cat, index) => (
        <TouchableOpacity
          key={cat.id}
          style={[
            styles.card,
            { borderLeftColor: COLORS.categoryColors[index % COLORS.categoryColors.length] },
          ]}
          onPress={() =>
            navigation.navigate('TestEngine', {
              mode: 'category',
              categoryId: cat.id,
              categoryName: cat.name,
            })
          }
          activeOpacity={0.7}
        >
          <View style={styles.cardRow}>
            <Text style={styles.icon}>{cat.icon}</Text>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{cat.name}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    marginBottom: 4,
  },
  subtitle: {
    ...FONTS.small,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    ...SHADOWS.card,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    ...FONTS.subheading,
    fontSize: 15,
  },
  arrow: {
    fontSize: 26,
    color: COLORS.textLight,
  },
});
