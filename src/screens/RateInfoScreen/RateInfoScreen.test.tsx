import React from 'react';
import RateInfoScreen from '../RateInfoScreen/RateInfoScreen';
import {render} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  return {
    useRoute: () => ({
      params: {
        baseCurrency: 'USD',
        targetCurrency: 'EUR',
        bid: 0.85,
        ask: 0.86,
        diff24h: -0.01,
        rate: 0.85,
      },
    }),
  };
});

describe('RateInfoScreen', () => {
  it('renders currency information correctly', () => {
    const {getByText} = render(<RateInfoScreen />);
    expect(getByText('1 USD = 0.850000 EUR')).toBeTruthy();
    expect(getByText('RATE 0.850000')).toBeTruthy();
    expect(getByText('24H DIFF -0.010000')).toBeTruthy();
    expect(getByText('ASK 0.860000')).toBeTruthy();
    expect(getByText('BID 0.850000')).toBeTruthy();
  });
});
