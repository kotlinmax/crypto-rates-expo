import React, {useContext} from 'react';
import s from './AppLayoutStyles';

import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import {IAppLayoutProps} from './IAppLayout';
import {gs} from '../../styles';

const AppLayout: React.FC<IAppLayoutProps> = observer(({children}) => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isNotFound} = ratesStore;

  return (
    <View style={s.layout}>
      {children}
      <View style={s.footer}>
        <Text style={gs.text}>TOTAL: {isNotFound ? 0 : filteredRates.length || rates.length}</Text>
      </View>
    </View>
  );
});

export default AppLayout;
