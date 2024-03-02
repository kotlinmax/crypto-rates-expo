import API from '../../api';

import {makeAutoObservable} from 'mobx';
import {RateDetail} from '../../api/rates/IRatesAPI';

export default class RatesStore {
  tag: string = 'RatesStore';
  error: string = '';
  searchText: string = '';
  rates: RateDetail[] = [];
  filteredRates: RateDetail[] = [];
  isLoading: boolean = false;
  isSearching: boolean = false;
  isSorting: boolean = false;
  isDesc: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isEmpty(): Boolean {
    return Boolean(this.searchText && !this.filteredRates.length);
  }

  setIsSearching(value: boolean) {
    this.isSearching = value;
  }

  setIsSorting(value: boolean) {
    this.isSorting = value;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }

  setFilteredRates(value: string) {
    this.filteredRates = this.rates.filter(rate => rate.baseCurrency.includes(value.toLowerCase()));
  }

  changeSort() {
    this.isDesc = !this.isDesc;

    const comparator = (a: RateDetail, b: RateDetail) => {
      const ac = a.baseCurrency;
      const bc = b.baseCurrency;
      return this.isDesc ? bc.localeCompare(ac) : ac.localeCompare(bc);
    };

    this.filteredRates.sort(comparator);
    this.rates.sort(comparator);
  }

  setError(value: string) {
    this.error = value;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  setRates(value: RateDetail[]) {
    this.rates = value.sort((a, b) => a.baseCurrency.localeCompare(b.baseCurrency));
  }

  async fetchRates() {
    try {
      this.setIsLoading(true);
      this.setError('');
      this.setRates(await API.rates.getRates());
    } catch (error) {
      this.setError('Failed to fetch rates');
      console.error(`[${this.tag}] fetchRates: `, error);
    } finally {
      this.setIsLoading(false);
    }
  }
}
