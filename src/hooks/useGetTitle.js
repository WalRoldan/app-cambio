import { useMemo } from "react";
import useCurrencyStore from "../store/currencyStore";

const useGetTitle = () => {
  const { amount, fromCurrency, toCurrency, fromCurrencyName, toCurrencyName } =
    useCurrencyStore();

  const title = useMemo(() => {
    return `${amount} ${fromCurrency} to ${toCurrency} - Convert ${fromCurrencyName} to ${toCurrencyName}`;
  }, [amount, fromCurrency, toCurrency, fromCurrencyName, toCurrencyName]);

  return title;
};

export default useGetTitle;
