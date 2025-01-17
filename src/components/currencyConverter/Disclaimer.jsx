import React from "react";
import { formatDate, generateCurrencyLink } from "../../utils/formats";
import Link from "./Link";

const Disclaimer = ({ from, to, fromCurrencyName, toCurrencyName }) => {
  return (
    <div className="lg:grid grid-cols-2 ">
      <div className="bg-blue-50 col-start-2 hidden lg:block p-4 mt-4 text-sm max-w-xl text-gray-600">
        <p>
          We use the mid-market rate for our Converter. This is for
          informational purposes only. You won’t receive this rate when sending
          money.
        </p>
      </div>
      <div className="text-sm lg:col-start-2 text-gray-600 mt-2">
        <p>
          <Link href={generateCurrencyLink(from, fromCurrencyName)}>
            {fromCurrencyName}
          </Link>{" "}
          to{" "}
          <Link href={generateCurrencyLink(to, toCurrencyName)}>
            {toCurrencyName}
          </Link>{" "}
          conversion — Last updated {formatDate()} UTC
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
