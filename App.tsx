import React from 'react';
import ErrorBoundary from './src/layouts/ErrorBoundary/ErrorBoundary';
import AppLayout from './src/layouts/AppLayout/AppLayout';
import RateListScreen from './src/screens/RateListScreen/RateListScreen';
import RateInfoScreen from './src/screens/RateInfoScreen/RateInfoScreen';

import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {TScreens} from './src/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {fonts, vars} from './src/styles';

const Stack = createNativeStackNavigator<TScreens>();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <ErrorBoundary>
        <AppLayout>
          <Stack.Navigator>
            <Stack.Screen
              name='Rates'
              component={RateListScreen}
              options={{title: 'RATES', headerTitleStyle: {fontFamily: vars.fontFamily.bold}}}
            />
            <Stack.Screen
              name='RateInfo'
              component={RateInfoScreen}
              options={{title: 'RATE INFO', headerTitleStyle: {fontFamily: vars.fontFamily.bold}}}
            />
          </Stack.Navigator>
        </AppLayout>
      </ErrorBoundary>
    </NavigationContainer>
  );
}
