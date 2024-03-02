import {StyleSheet} from 'react-native';
import {vars} from '../../../styles';

export default StyleSheet.create({
  rateItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {},
  positive: {
    color: vars.colors.green,
  },
  negative: {
    color: vars.colors.red,
  },
});
