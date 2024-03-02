import React from 'react';
import s from './LoaderStyles';
import {View, ActivityIndicator} from 'react-native';
import {vars} from '../../styles';

const Loader = () => {
  return (
    <View style={s.container}>
      <ActivityIndicator size='large' color={vars.colors.primary} />
    </View>
  );
};

export default Loader;
