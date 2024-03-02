import React, {useCallback, useContext, useEffect} from 'react';
import RateItemList from './RateItemList/RateItemList';
import LoaderErrorLayout from '../../layouts/LoaderErrorLayout/LoaderErrorLayout';
import s from './RateListScreenStyles';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import {debounce} from 'lodash';
import {StoresContext} from '../../stores/RootStore';
import {gs} from '../../styles';

const RateListScreen = observer(() => {
  const store = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, searchText, error} = store;
  const {isLoading, isNotFound, isDesc, isSorting, isSearching} = store;
  const isShowInfo = isSorting || isSearching || isNotFound;

  useEffect(() => {
    if (!rates.length) {
      store.fetchRates();
    }
  }, []);

  const onRefresh = useCallback(() => {
    store.fetchRates();
  }, []);

  const debouncedSearch = debounce(text => {
    store.setFilteredRates(text);
    store.setIsSearching(false);
  }, 300);

  const handleSearchChange = (text: string) => {
    store.setIsSearching(true);
    store.setSearchText(text);
    debouncedSearch(text);
  };

  const handleSortChange = () => {
    store.setIsSorting(true);
    setTimeout(() => {
      store.changeSort();
      store.setIsSorting(false);
    }, 0); // for big data (1 million)
  };

  return (
    <View style={s.rateItemList}>
      <View style={s.top}>
        <TouchableOpacity onPress={handleSortChange} style={s.sort}>
          <Text style={gs.text}>SORT {isDesc ? '▼' : '▲'}</Text>
        </TouchableOpacity>
        <TextInput
          style={[s.inputSearch, gs.text]}
          onChangeText={handleSearchChange}
          value={searchText}
          placeholder='Search'
        />
      </View>
      {isShowInfo ? (
        <View style={s.info}>
          <Text style={[s.text, gs.text]}>
            {isSorting ? 'Sorting...' : isSearching ? 'Searching...' : 'Not found rates.'}
          </Text>
        </View>
      ) : (
        <LoaderErrorLayout isLoading={isLoading} error={error}>
          <RateItemList
            rates={filteredRates.length ? filteredRates : rates}
            isDesc={isDesc}
            isLoading={isLoading}
            onRefresh={onRefresh}
          />
        </LoaderErrorLayout>
      )}
    </View>
  );
});

export default RateListScreen;
