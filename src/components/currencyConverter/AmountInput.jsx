import React from "react";

const AmountInput = ({ value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-600 text-sm mb-1">Amount</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
        $
      </span>
      <input
        type="number"
        min="0"
        step="0.01"
        value={value === 0 || value === "" ? "" : value}
        onChange={(e) => {
          const inputValue = e.target.value;
          const parsedValue =
            inputValue === "" ? "" : parseFloat(inputValue) || 0;
          onChange(parsedValue);
        }}
        className="border rounded-md p-2 pl-8 text-gray-800 w-full"
      />
    </div>
  </div>
);

export default AmountInput;
