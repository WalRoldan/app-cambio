import { fetchCurrencies, fetchExchangeRates } from "./currencyService";
import apiClient from "../utils/apiClient";

jest.mock("../utils/apiClient", () => ({
  get: jest.fn(),
}));

describe("currencyService", () => {
  beforeEach(() => {
    apiClient.get.mockReset();
  });

  it("fetchCurrencies should return the correct data", async () => {
    const mockData = { USD: "1.2", EUR: "1" };
    apiClient.get.mockResolvedValueOnce({ data: mockData });

    const currencies = await fetchCurrencies();

    expect(apiClient.get).toHaveBeenCalledWith("/currencies");
    expect(currencies).toEqual(mockData);
  });

  it("fetchExchangeRates should return the correct data for a specific base", async () => {
    const mockData = { USD: "1.2", EUR: "1" };
    apiClient.get.mockResolvedValueOnce({ data: mockData });

    const exchangeRates = await fetchExchangeRates("EUR");

    expect(apiClient.get).toHaveBeenCalledWith("/rates?base=EUR");
    expect(exchangeRates).toEqual(mockData);
  });

  it("fetchExchangeRates should return the correct data for default base", async () => {
    const mockData = { USD: "1.2", EUR: "1" };
    apiClient.get.mockResolvedValueOnce({ data: mockData });

    const exchangeRates = await fetchExchangeRates();

    expect(apiClient.get).toHaveBeenCalledWith("/rates?base=EUR");
    expect(exchangeRates).toEqual(mockData);
  });
});
