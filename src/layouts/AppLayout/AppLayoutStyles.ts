import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButton: {
    marginTop: 10,
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
