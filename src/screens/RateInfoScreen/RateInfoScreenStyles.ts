import {StyleSheet} from 'react-native';
import {vars} from '../../styles';

export default StyleSheet.create({
  rateInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: vars.colors.white,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: vars.fontFamily.bold,
  },
  copyText: {
    marginTop: 20,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 250,
    marginTop: 10,
    padding: 20,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: vars.colors.primary,
  },
  positive: {
    borderColor: vars.colors.green,
  },
  negative: {
    borderColor: vars.colors.red,
  },
});
