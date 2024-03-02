import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRateItemProps} from './screens/RateListScreen/RateItem/IRateItem';

// Navigation
export type TNavigation = {
  Rates: {};
  RateInfo: IRateItemProps;
};

export type TUseNavigation = NativeStackNavigationProp<TNavigation>;
