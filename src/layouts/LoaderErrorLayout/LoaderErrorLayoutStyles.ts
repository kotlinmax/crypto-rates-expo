import {StyleSheet} from 'react-native';
import {vars} from '../../styles';

export default StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: vars.colors.primary,
  },
  reloadButton: {
    marginTop: 20,
    backgroundColor: vars.colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reloadButtonText: {
    color: vars.colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
});
