import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-red-50 border border-red-200 rounded-md p-4">
      <p className="text-red-600 text-lg font-semibold">Error</p>
      <p className="text-gray-700 mt-2">{message}</p>
    </div>
  );
};

export default ErrorMessage;
