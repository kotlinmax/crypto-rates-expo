import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from './src/styles';
import {useFonts} from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Mina-Regular': require('./assets/fonts/Mina-Regular.ttf'),
    'Mina-Bold': require('./assets/fonts/Mina-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={s.container}>
      <Text style={[gs.text]}>Open up App.js to start working your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
