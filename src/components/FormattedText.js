import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';

/**
 * Simple markdown-like text renderer for study material.
 * Supports: **bold**, bullet points (•, -), and table-like rows (|).
 */
export default function FormattedText({ children, style }) {
  if (typeof children !== 'string') {
    return <Text style={style}>{children}</Text>;
  }

  const lines = children.split('\n');

  return (
    <View>
      {lines.map((line, lineIndex) => {
        const trimmed = line.trim();

        // Table row
        if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
          const cells = trimmed
            .split('|')
            .filter((c) => c.trim() !== '')
            .map((c) => c.trim());

          // Skip separator rows (|---|---|)
          if (cells.every((c) => /^[-:]+$/.test(c))) {
            return (
              <View
                key={lineIndex}
                style={styles.tableSeparator}
              />
            );
          }

          return (
            <View key={lineIndex} style={styles.tableRow}>
              {cells.map((cell, cellIndex) => (
                <View key={cellIndex} style={styles.tableCell}>
                  <Text style={[styles.tableCellText, cellIndex === 0 && styles.tableCellFirst]}>
                    {cell}
                  </Text>
                </View>
              ))}
            </View>
          );
        }

        // Blank line
        if (trimmed === '') {
          return <View key={lineIndex} style={styles.blankLine} />;
        }

        // Render line with inline bold
        return (
          <Text key={lineIndex} style={[styles.line, style]}>
            {renderInlineFormatting(line)}
          </Text>
        );
      })}
    </View>
  );
}

function renderInlineFormatting(text) {
  const parts = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text before the bold
    if (match.index > lastIndex) {
      parts.push(
        <Text key={`t-${lastIndex}`}>
          {text.substring(lastIndex, match.index)}
        </Text>
      );
    }
    // Bold text
    parts.push(
      <Text key={`b-${match.index}`} style={styles.bold}>
        {match[1]}
      </Text>
    );
    lastIndex = regex.lastIndex;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(
      <Text key={`t-${lastIndex}`}>{text.substring(lastIndex)}</Text>
    );
  }

  return parts.length > 0 ? parts : text;
}

const styles = StyleSheet.create({
  line: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.text,
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  blankLine: {
    height: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 4,
  },
  tableSeparator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 2,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 4,
  },
  tableCellText: {
    fontSize: 12,
    color: COLORS.text,
    lineHeight: 18,
  },
  tableCellFirst: {
    fontWeight: '600',
  },
});
