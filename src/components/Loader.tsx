import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {vars} from '../../src/styles';

const Loader = () => {
  return (
    <View style={s.container}>
      <ActivityIndicator size='large' color={vars.colors.secondary} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
