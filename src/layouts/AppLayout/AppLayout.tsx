import React, {useContext} from 'react';
import s from './AppLayoutStyles';

import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import {IAppLayoutProps} from './IAppLayout';

const AppLayout: React.FC<IAppLayoutProps> = observer(({children}) => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isEmpty} = ratesStore;

  return (
    <View style={s.layout}>
      {children}
      <View style={s.footer}>
        <Text>TOTAL: {isEmpty ? 0 : filteredRates.length || rates.length}</Text>
      </View>
    </View>
  );
});

export default AppLayout;
