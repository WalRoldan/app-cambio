import React from "react";

const LoadingCurrencies = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      <p className="ml-4 text-gray-600">Loading currencies...</p>
    </div>
  );
};

export default LoadingCurrencies;
