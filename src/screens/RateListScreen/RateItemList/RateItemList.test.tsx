import React from 'react';
import RateItemList from './RateItemList';
import {render} from '@testing-library/react-native';

const mockRates = [
  {
    baseCurrency: 'USD',
    targetCurrency: 'EUR',
    rate: 0.85,
    ask: 0.86,
    bid: 0.84,
    diff24h: -0.01,
  },
  {
    baseCurrency: 'GBP',
    targetCurrency: 'USD',
    rate: 1.38,
    ask: 1.39,
    bid: 1.37,
    diff24h: 0.02,
  },
];

describe('RateItemList', () => {
  it('renders a list of rates correctly', () => {
    const onRefresh = jest.fn();
    const {getByText} = render(<RateItemList rates={mockRates} onRefresh={onRefresh} isLoading={false} isDesc={false} />);

    expect(getByText('USD/EUR')).toBeTruthy();
    expect(getByText('GBP/USD')).toBeTruthy();
    
    expect(getByText('Rate: 0.850000')).toBeTruthy();
    expect(getByText('Rate: 1.380000')).toBeTruthy();
  });
});
