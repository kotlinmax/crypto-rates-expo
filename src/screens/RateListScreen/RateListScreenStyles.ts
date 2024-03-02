import {StyleSheet} from 'react-native';
import {vars} from '../../styles';

export default StyleSheet.create({
  rateItemList: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: vars.colors.white,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sort: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSearch: {
    flex: 4,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});
