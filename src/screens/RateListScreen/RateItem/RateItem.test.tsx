import React from 'react';
import RateItem from './RateItem';
import {render, fireEvent} from '@testing-library/react-native';

describe('RateItem', () => {
  const mockProps = {
    baseCurrency: 'USD',
    targetCurrency: 'EUR',
    rate: 0.85,
    diff24h: 0.01,
    ask:0, bid:0
  };
  
  it('renders correctly', () => {
    const { getByText } = render(<RateItem {...mockProps} />);
    expect(getByText('USD/EUR')).toBeTruthy();
    expect(getByText('Rate: 0.850000')).toBeTruthy();
    expect(getByText('24h Change: 0.010000')).toBeTruthy();
  });

  it('navigates on press', () => { 
    const { getByText } = render(<RateItem {...mockProps} />);
    const touchableOpacity = getByText('USD/EUR').parent.parent;
    fireEvent.press(touchableOpacity); 
    expect(globalThis.mockNavigate).toHaveBeenCalledWith('RateInfo', mockProps); 
  })
});
