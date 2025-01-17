import apiClient from "../utils/apiClient";

export const fetchCurrencies = async () => {
  const response = await apiClient.get("/currencies");
  return response.data;
};

export const fetchExchangeRates = async (base = "EUR") => {
  const response = await apiClient.get(`/rates?base=${base}`);
  return response.data;
};
