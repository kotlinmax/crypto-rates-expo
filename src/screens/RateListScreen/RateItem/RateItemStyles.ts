import {StyleSheet} from 'react-native';
import {vars} from '../../../styles';

export default StyleSheet.create({
  rateItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: vars.colors.primary,
    borderRadius: 10,
    shadowColor: vars.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 14,
    marginVertical: 8,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: vars.fontFamily.bold,
  },
  positive: {
    color: vars.colors.green,
    fontFamily: vars.fontFamily.regular,
  },
  negative: {
    color: vars.colors.red,
    fontFamily: vars.fontFamily.regular,
  },
});
