import { create } from "zustand";
import {
  fetchCurrencies,
  fetchExchangeRates,
} from "../services/currencyService";

const useCurrencyStore = create((set, get) => ({
  currencies: [],
  loading: false,
  error: null,
  fromCurrency: "USD",
  toCurrency: "EUR",
  fromCurrencyName: "US Dollar",
  toCurrencyName: "Euro",
  amount: 1.0,
  exchangeRate: null,
  convertedAmount: null,

  setFromCurrency: (currency) => {
    set({ fromCurrency: currency });
    get().updateCurrencyNames();
  },
  setToCurrency: (currency) => {
    set({ toCurrency: currency });
    get().updateCurrencyNames();
  },
  setAmount: (amount) => set({ amount }),

  fetchCurrencies: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchCurrencies();
      const currencies = Object.entries(data).map(([code, details]) => ({
        code,
        name: details.name,
        symbol: details.symbol,
      }));
      set({
        currencies,
        loading: false,
        currencyOptions: currencies.map((currency) => ({
          label: `${currency.name}`,
          value: currency.code,
        })),
      });
      get().updateCurrencyNames();
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateCurrencyNames: () => {
    const { currencies, fromCurrency, toCurrency } = get();
    const fromCurrencyData = currencies.find((c) => c.code === fromCurrency);
    const toCurrencyData = currencies.find((c) => c.code === toCurrency);

    set({
      fromCurrencyName: fromCurrencyData?.name || fromCurrency,
      toCurrencyName: toCurrencyData?.name || toCurrency,
    });
  },

  handleSwapCurrencies: () => {
    const { fromCurrency, toCurrency, fromCurrencyName, toCurrencyName } =
      get();
    set({
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
      fromCurrencyName: toCurrencyName,
      toCurrencyName: fromCurrencyName,
    });
  },

  fetchExchangeRate: async () => {
    const { fromCurrency, toCurrency } = get();
    try {
      const response = await fetchExchangeRates(fromCurrency, toCurrency);
      const rate = response.rates[toCurrency];
      set({ exchangeRate: rate });
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  },

  calculateConvertedAmount: () => {
    const { amount, exchangeRate } = get();
    if (exchangeRate) {
      const converted = (amount * exchangeRate).toFixed(2);
      set({ convertedAmount: converted });
    }
  },
}));

export default useCurrencyStore;
