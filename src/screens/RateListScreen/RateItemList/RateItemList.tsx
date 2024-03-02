import React from 'react';
import RateItem from '../RateItem/RateItem';

import {FlatList} from 'react-native';
import {RateItemListProps} from './IRateItemList';

const RateItemList: React.FC<RateItemListProps> = ({rates, onRefresh, isLoading}) => {
  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={onRefresh}
      data={rates}
      keyExtractor={item => `${item.baseCurrency}-${item.targetCurrency}`}
      renderItem={({item}) => (
        <RateItem
          baseCurrency={item.baseCurrency}
          targetCurrency={item.targetCurrency}
          rate={item.rate}
          ask={item.ask}
          bid={item.bid}
          diff24h={item.diff24h}
        />
      )}
    />
  );
};

export default React.memo(RateItemList);
