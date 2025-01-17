import React, { useEffect, useMemo } from "react";
import Header from "../components/common/Header";
import Converter from "../components/currencyConverter/Converter";
import LoadingCurrencies from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import useCurrencyStore from "../store/currencyStore";
import useGetTitle from "../hooks/useGetTitle";

const CurrencyConverter = () => {
  const { loading, error, fetchCurrencies } = useCurrencyStore();
  const title = useGetTitle();

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  if (loading) return <LoadingCurrencies />;
  if (error)
    return (
      <ErrorMessage message="Failed to load currencies. Please try again later." />
    );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-customLightBlue text-white py-6 min-h-60">
          <h2 className="text-center lg:max-w-[100%] lg:ml-0 ml-[15%] text-[32px] font-semibold leading-[32px]  max-w-[70%] ">
            {title}
          </h2>
        </div>

        <Converter />
      </main>
    </div>
  );
};

export default CurrencyConverter;
