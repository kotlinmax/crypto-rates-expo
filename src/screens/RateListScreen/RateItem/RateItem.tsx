import React from 'react';
import s from './RateItemStyles';

import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '../../../types';
import {IRateItemProps} from './IRateItem';
import {gs} from '../../../styles';

const RateItem: React.FC<IRateItemProps> = props => {
  const {baseCurrency, targetCurrency, rate, diff24h} = props;
  const navigation = useNavigation<TUseNavigation>();

  const handlePress = () => {
    navigation.navigate('RateInfo', props);
  };

  return (
    <TouchableOpacity style={s.rateItem} onPress={handlePress}>
      <View style={s.header}>
        <Text style={s.title}>
          {baseCurrency.toUpperCase()}/{targetCurrency.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text style={gs.text}>Rate: {rate.toFixed(6)}</Text>
        <Text style={diff24h >= 0 ? s.positive : s.negative}>24h Change: {diff24h.toFixed(6)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RateItem);
