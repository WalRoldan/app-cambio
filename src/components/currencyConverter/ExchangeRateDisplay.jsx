import React from "react";

const ExchangeRateDisplay = ({
  amount,
  convertedAmount,
  from,
  to,
  rate,
  fromCurrencyName,
  toCurrencyName,
}) => {
  return (
    <div className="mt-4 max-w-fit ">
      <p className="text-3xl font-bold">
        {amount} {fromCurrencyName} =
      </p>
      <p className="text-3xl font-bold">
        {" "}
        {convertedAmount} {toCurrencyName}
      </p>
      <p className="text-gray-500 mt-2 text-sm">
        1 {from} = {rate} {to}
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
