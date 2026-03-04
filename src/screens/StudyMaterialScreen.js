import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { STUDY_MATERIAL } from '../data/studyMaterial';
import FormattedText from '../components/FormattedText';
import { COLORS, FONTS, SHADOWS } from '../utils/theme';

export default function StudyMaterialScreen({ route }) {
  const { categoryId, categoryName } = route.params;
  const material = STUDY_MATERIAL[categoryId];
  const [expandedSection, setExpandedSection] = useState(0);

  if (!material) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Study material coming soon for this category.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>{categoryName}</Text>
      {material.sections.map((section, index) => (
        <View key={index} style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() =>
              setExpandedSection(expandedSection === index ? -1 : index)
            }
            activeOpacity={0.7}
          >
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumber}>{index + 1}</Text>
            </View>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.expandIcon}>
              {expandedSection === index ? '−' : '+'}
            </Text>
          </TouchableOpacity>
          {expandedSection === index && (
            <View style={styles.sectionContent}>
              <FormattedText style={styles.contentText}>{section.content}</FormattedText>
            </View>
          )}
        </View>
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
    marginBottom: 16,
  },
  errorText: {
    ...FONTS.regular,
    textAlign: 'center',
    marginTop: 40,
    color: COLORS.textLight,
  },
  sectionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 12,
    ...SHADOWS.card,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  sectionNumberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionNumber: {
    color: COLORS.textWhite,
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    ...FONTS.subheading,
    fontSize: 15,
    flex: 1,
  },
  expandIcon: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  contentText: {
    ...FONTS.regular,
    fontSize: 14,
    lineHeight: 22,
    paddingTop: 12,
  },
});
