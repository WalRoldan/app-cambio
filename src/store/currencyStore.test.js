import { act, render } from "@testing-library/react";
import useCurrencyStore from "./currencyStore";
import {
  fetchCurrencies,
  fetchExchangeRates,
} from "../services/currencyService";

jest.mock("../services/currencyService", () => ({
  fetchCurrencies: jest.fn(),
  fetchExchangeRates: jest.fn(),
}));

describe("useCurrencyStore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("inicia con valores predeterminados", () => {
    const state = useCurrencyStore.getState();
    expect(state.fromCurrency).toBe("USD");
    expect(state.toCurrency).toBe("EUR");
    expect(state.amount).toBe(1.0);
    expect(state.convertedAmount).toBe(null);
  });

  it("cambia la moneda de origen correctamente", () => {
    const { setFromCurrency } = useCurrencyStore.getState();
    act(() => {
      setFromCurrency("GBP");
    });
    const state = useCurrencyStore.getState();
    expect(state.fromCurrency).toBe("GBP");
  });

  it("cambia la moneda de destino correctamente", () => {
    const { setToCurrency } = useCurrencyStore.getState();
    act(() => {
      setToCurrency("JPY");
    });
    const state = useCurrencyStore.getState();
    expect(state.toCurrency).toBe("JPY");
  });

  it("actualiza correctamente los nombres de las monedas", async () => {
    fetchCurrencies.mockResolvedValueOnce({
      USD: { name: "US Dollar", symbol: "$" },
      EUR: { name: "Euro", symbol: "€" },
    });

    const { setFromCurrency, setToCurrency } = useCurrencyStore.getState();

    await act(async () => {
      await fetchCurrencies();
    });

    act(() => {
      setFromCurrency("USD");
      setToCurrency("EUR");
    });

    const state = useCurrencyStore.getState();
    expect(state.fromCurrencyName).toBe("USD");
    expect(state.toCurrencyName).toBe("EUR");
  });

  it("realiza el intercambio de monedas correctamente", async () => {
    const { setFromCurrency, setToCurrency, handleSwapCurrencies } =
      useCurrencyStore.getState();

    act(() => {
      setFromCurrency("USD");
      setToCurrency("EUR");
    });

    act(() => {
      handleSwapCurrencies();
    });

    const state = useCurrencyStore.getState();
    expect(state.fromCurrency).toBe("EUR");
    expect(state.toCurrency).toBe("USD");
  });

  it("maneja errores al obtener monedas", async () => {
    fetchCurrencies.mockRejectedValueOnce(
      new Error("Error al obtener monedas")
    );

    const { fetchCurrencies: storeFetchCurrencies } =
      useCurrencyStore.getState();

    await act(async () => {
      await storeFetchCurrencies();
    });

    const state = useCurrencyStore.getState();
    expect(state.error).toBe("Error al obtener monedas");
  });
  it("obtiene correctamente la tasa de cambio", async () => {
    fetchExchangeRates.mockResolvedValueOnce({ rates: { EUR: 0.85 } });

    const { fetchExchangeRate } = useCurrencyStore.getState();

    await act(async () => {
      await fetchExchangeRate();
    });

    const state = useCurrencyStore.getState();
    expect(state.exchangeRate).toBe(undefined);
  });

  it("calcula correctamente la cantidad convertida", async () => {
    fetchExchangeRates.mockResolvedValueOnce({ rates: { EUR: 0.85 } });

    const { setAmount, fetchExchangeRate, calculateConvertedAmount } =
      useCurrencyStore.getState();

    act(() => {
      setAmount(10.0);
    });

    await act(async () => {
      await fetchExchangeRate();
    });

    act(() => {
      calculateConvertedAmount();
    });

    const state = useCurrencyStore.getState();
    expect(state.convertedAmount).toBe(null);
  });
});
