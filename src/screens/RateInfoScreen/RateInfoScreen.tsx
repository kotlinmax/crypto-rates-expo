import React from 'react';
import RateListScreen from '../RateListScreen/RateListScreen';
import s from './RateInfoScreenStyles';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';

import {TRateInfoRouteParams} from './IRateInfoScreen';

const RateInfoScreen: React.FC = () => {
  const route = useRoute<RouteProp<TRateInfoRouteParams, 'RateInfo'>>();
  const {baseCurrency, targetCurrency, bid, ask, diff24h, rate} = route.params;

  if (!baseCurrency) return <RateListScreen />;

  return (
    <View style={s.rateInfo}>
      <Text style={s.title}>
        1 {baseCurrency.toUpperCase()} = {rate.toFixed(6)} {targetCurrency.toUpperCase()}
      </Text>

      <View style={[s.circle, diff24h >= 0 ? s.positive : s.negative]}>
        <Text>RATE {rate.toFixed(6)}</Text>
        <Text>24H DIFF {diff24h.toFixed(6)}</Text>
        <Text>ASK {ask.toFixed(6)}</Text>
        <Text>BID {bid.toFixed(6)}</Text>
      </View>
    </View>
  );
};

export default RateInfoScreen;
