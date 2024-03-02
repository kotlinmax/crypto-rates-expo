import {StyleSheet} from 'react-native';
import {vars} from '../../styles';

export default StyleSheet.create({
  rateInfo: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  circle: {
    marginTop: 10,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  positive: {
    backgroundColor: vars.colors.green,
  },
  negative: {
    backgroundColor: vars.colors.red,
  },
});
