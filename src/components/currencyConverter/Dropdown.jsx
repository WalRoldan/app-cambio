import React from "react";

const Dropdown = ({ label, options, value, onChange, className }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="text-gray-600 text-sm mb-1">{label}</label>
    <select
      className="border rounded-md p-2 text-gray-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select a currency
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
