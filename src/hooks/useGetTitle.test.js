import { renderHook } from "@testing-library/react";
import useGetTitle from "./useGetTitle";
import useCurrencyStore from "../store/currencyStore";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  })),
}));

jest.mock("../store/currencyStore", () => {
  return jest.fn();
});

describe("useGetTitle", () => {
  it("should return the correct title based on the store values", () => {
    useCurrencyStore.mockReturnValue({
      amount: 100,
      fromCurrency: "USD",
      toCurrency: "EUR",
      fromCurrencyName: "US Dollar",
      toCurrencyName: "Euro",
    });

    const { result } = renderHook(() => useGetTitle());

    expect(result.current).toBe("100 USD to EUR - Convert US Dollar to Euro");
  });

  it("should update the title when store values change", () => {
    const mockStoreValues = {
      amount: 50,
      fromCurrency: "GBP",
      toCurrency: "USD",
      fromCurrencyName: "British Pound",
      toCurrencyName: "US Dollar",
    };
    useCurrencyStore.mockReturnValue(mockStoreValues);

    const { result, rerender } = renderHook(() => useGetTitle());

    expect(result.current).toBe(
      "50 GBP to USD - Convert British Pound to US Dollar"
    );

    mockStoreValues.amount = 75;
    mockStoreValues.toCurrency = "EUR";
    mockStoreValues.toCurrencyName = "Euro";

    rerender();

    expect(result.current).toBe(
      "75 GBP to EUR - Convert British Pound to Euro"
    );
  });
});
