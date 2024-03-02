import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRateItemProps} from './screens/RateListScreen/RateItem/IRateItem';

// Navigation
export type TScreens = {
  Rates: {};
  RateInfo: IRateItemProps;
};

export type TUseNavigation = NativeStackNavigationProp<TScreens>;
