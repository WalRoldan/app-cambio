import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import Disclaimer from "./Disclaimer";
import AmountInput from "./AmountInput";
import LoadingCurrencies from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";
import { MdCurrencyExchange } from "react-icons/md";
import useCurrencyStore from "../../store/currencyStore";

const Converter = () => {
  const {
    amount,
    fromCurrency,
    toCurrency,
    setAmount,
    setFromCurrency,
    setToCurrency,
    handleSwapCurrencies,
    currencyOptions,
    loading,
    error,
    exchangeRate,
    convertedAmount,
    fetchExchangeRate,
    calculateConvertedAmount,
    fromCurrencyName,
    toCurrencyName,
  } = useCurrencyStore();

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    calculateConvertedAmount();
  }, [amount, exchangeRate]);

  if (loading) return <LoadingCurrencies />;
  if (error)
    return (
      <ErrorMessage message="Failed to load currencies. Please try again later." />
    );

  return (
    <div className="bg-white rounded-xl shadow-md  m p-6 max-w-6xl lg:mx-auto mx-6 -mt-20 lg:-mt-28 relative">
      <div className="grid grid-cols-1 font-semibold md:grid-cols-4 gap-6 p-2">
        <AmountInput
          value={amount}
          onChange={(value) => setAmount(value >= 0 ? value : 1.0)}
        />
        <Dropdown
          htmlFor={"fromCurrency"}
          label="From"
          options={currencyOptions}
          value={fromCurrency}
          onChange={(value) => setFromCurrency(value)}
        />
        <div className="flex items-start justify-start">
          <button
            onClick={handleSwapCurrencies}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <MdCurrencyExchange className="lg:mt-6 -mt-4 lg:ml-10 text-4xl text-customBlue" />
          </button>
        </div>
        <Dropdown
          htmlFor={"toCurrency"}
          className="lg:ml-[-50%] lg:pr-[50%]"
          label="To"
          options={currencyOptions}
          value={toCurrency}
          onChange={(value) => setToCurrency(value)}
        />
      </div>
      <ExchangeRateDisplay
        amount={amount}
        convertedAmount={convertedAmount}
        from={fromCurrency}
        to={toCurrency}
        rate={exchangeRate}
        fromCurrencyName={fromCurrencyName}
        toCurrencyName={toCurrencyName}
      />
      <Disclaimer
        from={fromCurrency}
        to={toCurrency}
        fromCurrencyName={fromCurrencyName}
        toCurrencyName={toCurrencyName}
      />
    </div>
  );
};

export default Converter;
