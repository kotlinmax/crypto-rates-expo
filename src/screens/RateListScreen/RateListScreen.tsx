import React, {useCallback, useContext, useEffect} from 'react';
import Loader from '../../components/Loader/Loader';
import RateItemList from './RateItemList/RateItemList';
import LoaderErrorLayout from '../../layouts/LoaderErrorLayout/LoaderErrorLayout';
import s from './RateListScreenStyles';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import {debounce} from 'lodash';
import {StoresContext} from '../../stores/RootStore';

const RateListScreen = observer(() => {
  const store = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, searchText, error} = store;
  const {isLoading, isEmpty, isDesc, isSorting, isSearching} = store;

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
    }, 0);
  };

  return (
    <View style={s.rateItemList}>
      <View style={s.top}>
        <TouchableOpacity onPress={handleSortChange} style={s.sort}>
          <Text>SORT {isDesc ? '▼' : '▲'}</Text>
        </TouchableOpacity>
        <TextInput style={s.inputSearch} onChangeText={handleSearchChange} value={searchText} placeholder='Search' />
      </View>

      {isLoading ? (
        <Loader />
      ) : isSorting || isSearching ? (
        <View style={s.info}>
          <Text style={s.text}>{isSorting ? 'Sorting...' : 'Searching...'}</Text>
        </View>
      ) : isEmpty ? (
        <View style={s.info}>
          <Text style={s.text}>Not found rates.</Text>
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
