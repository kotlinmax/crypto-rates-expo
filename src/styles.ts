import {StyleSheet} from 'react-native';

// Fonts
export const fonts = {
  'Mina-Regular': require('../assets/fonts/Mina-Regular.ttf'),
  'Mina-Bold': require('../assets/fonts/Mina-Bold.ttf'),
};

// Variables
export const vars = {
  colors: {
    primary: '#ccc',
    secondary: '#3898ec',
    background: '#f8f9fa',
    text: '#212529',
    green: '#24b524',
    red: '#c43b3b',
    white: '#ffff',
  },
  fontFamily: {
    regular: 'Mina-Regular',
    bold: 'Mina-Bold',
  },
};

// Global styles
export const gs = StyleSheet.create({
  text: {
    fontFamily: vars.fontFamily.regular,
    fontSize: 16,
  },
});
