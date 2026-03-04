export const COLORS = {
  primary: '#1A5276',
  primaryLight: '#2980B9',
  secondary: '#148F77',
  secondaryLight: '#1ABC9C',
  accent: '#E67E22',
  accentLight: '#F39C12',
  background: '#F4F6F7',
  card: '#FFFFFF',
  text: '#2C3E50',
  textLight: '#7F8C8D',
  textWhite: '#FFFFFF',
  success: '#27AE60',
  danger: '#E74C3C',
  warning: '#F39C12',
  border: '#D5D8DC',
  shadow: '#000000',
  correct: '#27AE60',
  incorrect: '#E74C3C',
  skipped: '#BDC3C7',
  categoryColors: [
    '#1A5276', '#148F77', '#E67E22', '#8E44AD',
    '#E74C3C', '#2ECC71', '#3498DB', '#F39C12',
  ],
};

export const FONTS = {
  regular: { fontSize: 16, color: COLORS.text },
  bold: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  heading: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  subheading: { fontSize: 18, fontWeight: '600', color: COLORS.text },
  small: { fontSize: 13, color: COLORS.textLight },
  button: { fontSize: 16, fontWeight: '600', color: COLORS.textWhite },
};

export const SHADOWS = {
  card: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};
