import React, {useContext} from 'react';
import Loader from '../../components/Loader/Loader';
import s from './LoaderErrorLayoutStyles';

import {View, Text, TouchableOpacity} from 'react-native';
import {ILoaderErrorLayoutProps} from './ILoaderErrorLayout';
import {StoresContext} from '../../stores/RootStore';

const LoaderErrorLayout: React.FC<ILoaderErrorLayoutProps> = props => {
  const store = useContext(StoresContext).ratesStore;
  const {isLoading, error, children} = props;

  const handleReload = () => {
    store.fetchRates();
  };

  if (isLoading) {
    return (
      <View style={s.layout}>
        <Loader />
      </View>
    );
  }

  if (error) {
    return (
      <View style={s.layout}>
        <Text style={s.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={handleReload} style={s.reloadButton}>
          <Text style={s.reloadButtonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <>{children}</>;
};

export default React.memo(LoaderErrorLayout);
