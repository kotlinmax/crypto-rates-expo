import React from 'react';
import RateListScreen from '../RateListScreen/RateListScreen';
import s from './RateInfoScreenStyles';

import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {gs} from '../../styles';
import {TNavigation} from '../../types';

const RateInfoScreen: React.FC = () => {
  const route = useRoute<RouteProp<TNavigation, 'RateInfo'>>();
  const {baseCurrency, targetCurrency, bid, ask, diff24h, rate} = route.params;

  if (!baseCurrency) return <RateListScreen />;

  return (
    <View style={s.rateInfo}>
      <Text style={s.title}>
        1 {baseCurrency.toUpperCase()} = {rate.toFixed(6)} {targetCurrency.toUpperCase()}
      </Text>
      <View style={[s.circle, diff24h >= 0 ? s.positive : s.negative]}>
        <Text style={gs.text}>RATE {rate.toFixed(6)}</Text>
        <Text style={gs.text}>24H DIFF {diff24h.toFixed(6)}</Text>
        <Text style={gs.text}>ASK {ask.toFixed(6)}</Text>
        <Text style={gs.text}>BID {bid.toFixed(6)}</Text>
      </View>
    </View>
  );
};

export default RateInfoScreen;
