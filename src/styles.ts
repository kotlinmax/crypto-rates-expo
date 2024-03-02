import {StyleSheet} from 'react-native';

// Variables
export const vars = {
  colors: {
    primary: '#3898ec',
    secondary: '#ccc',
    background: '#f8f9fa',
    text: '#212529',
    green: 'rgb(36, 181, 36)',
    red: 'rgb(196, 59, 59)',
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