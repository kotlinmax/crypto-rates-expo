import React from 'react';
import RateStore from '../../stores/RatesStore/RatesStore'
import RateListScreen from './RateListScreen';
import {render, fireEvent, act} from '@testing-library/react-native';
import {StoresContext} from '../../stores/RootStore';

const mockStore = new RateStore();
mockStore.fetchRates = jest.fn();
mockStore.setFilteredRates = jest.fn();
mockStore.setIsSearching = jest.fn();
mockStore.setIsSorting = jest.fn(),
mockStore.changeSort = jest.fn();

describe('RateListScreen', () => {
  it('renders and interacts correctly', async () => {
    const { getByText, getByPlaceholderText } = render(
      <StoresContext.Provider value={{ ratesStore: mockStore }}>
        <RateListScreen />
      </StoresContext.Provider>
    );

    expect(mockStore.fetchRates).toHaveBeenCalledTimes(1);

    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'USD');

    await act(async () => {
      jest.runAllTimers();
    });

    expect(mockStore.setIsSearching).toHaveBeenCalledWith(true);
    expect(mockStore.setFilteredRates).toHaveBeenCalledWith('USD');

    const sortButton = getByText(/SORT/);

    await act(async () => {
      fireEvent.press(sortButton); 
      jest.runAllTimers(); 
    });
  
    expect(mockStore.setIsSorting).toHaveBeenCalledTimes(2);
    expect(mockStore.changeSort).toHaveBeenCalledTimes(1);  });
});
