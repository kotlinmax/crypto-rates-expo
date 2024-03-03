import React from 'react';
import * as Clipboard from 'expo-clipboard';
import RateListScreen from '../RateListScreen/RateListScreen';
import s from './RateInfoScreenStyles';
import Toast from 'react-native-root-toast';

import {View, Text, TouchableOpacity} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {gs} from '../../styles';
import {TNavigation} from '../../types';

const RateInfoScreen: React.FC = () => {
  const route = useRoute<RouteProp<TNavigation, 'RateInfo'>>();
  const {baseCurrency, targetCurrency, bid, ask, diff24h, rate} = route.params;

  if (!baseCurrency) return <RateListScreen />;

  const copyToClipboard = () => {
    const dataToCopy = `
      ${baseCurrency.toUpperCase()} / ${targetCurrency.toUpperCase()}
      RATE: ${rate.toFixed(6)}
      24H DIFF: ${diff24h.toFixed(6)}
      ASK: ${ask.toFixed(6)}
      BID: ${bid.toFixed(6)}
    `;

    Clipboard.setStringAsync(dataToCopy)
      .then(() => Toast.show('Data copied to clipboard!'))
      .catch(() => Toast.show('Data copied failed.'));
  };

  return (
    <View style={s.rateInfo}>
      <Text style={s.title}>
        1 {baseCurrency.toUpperCase()} = {rate.toFixed(6)} {targetCurrency.toUpperCase()}
      </Text>
      <TouchableOpacity style={[s.circle, diff24h >= 0 ? s.positive : s.negative]} onPress={copyToClipboard}>
        <Text style={gs.text}>RATE {rate.toFixed(6)}</Text>
        <Text style={gs.text}>24H DIFF {diff24h.toFixed(6)}</Text>
        <Text style={gs.text}>ASK {ask.toFixed(6)}</Text>
        <Text style={gs.text}>BID {bid.toFixed(6)}</Text>
        <Text style={[s.copyText, gs.text]}>Click me to copy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateInfoScreen;
