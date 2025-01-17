import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Converter from "./Converter";
import { MdCurrencyExchange } from "react-icons/md";
import useCurrencyStore from "../../store/currencyStore";
import "@testing-library/jest-dom";

jest.mock("../../store/currencyStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../common/Loader", () => () => <div>Loading...</div>);
jest.mock("../common/ErrorMessage", () => ({ message }) => (
  <div>{message}</div>
));
jest.mock("./AmountInput", () => ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
));
jest.mock("./Dropdown", () => ({ label, options, value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
));
jest.mock(
  "./ExchangeRateDisplay",
  () =>
    ({ amount, convertedAmount, fromCurrencyName, toCurrencyName }) =>
      (
        <div>
          <p>
            {amount} {fromCurrencyName} = {convertedAmount} {toCurrencyName}
          </p>
        </div>
      )
);

describe("Converter Component", () => {
  beforeEach(() => {
    useCurrencyStore.mockReturnValue({
      amount: 100,
      fromCurrency: "USD",
      toCurrency: "EUR",
      setAmount: jest.fn(),
      setFromCurrency: jest.fn(),
      setToCurrency: jest.fn(),
      handleSwapCurrencies: jest.fn(),
      currencyOptions: [
        { value: "USD", label: "US Dollar" },
        { value: "EUR", label: "Euro" },
      ],
      loading: false,
      error: null,
      exchangeRate: 0.85,
      convertedAmount: 85,
      fetchExchangeRate: jest.fn(),
      calculateConvertedAmount: jest.fn(),
      fromCurrencyName: "US Dollar",
      toCurrencyName: "Euro",
    });
  });

  test("renders the component correctly", () => {
    render(<Converter />);
  });

  test("displays loading state correctly", () => {
    useCurrencyStore.mockReturnValueOnce({
      ...useCurrencyStore(),
      loading: true,
    });

    render(<Converter />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays error message correctly", () => {
    useCurrencyStore.mockReturnValueOnce({
      ...useCurrencyStore(),
      error: true,
    });

    render(<Converter />);

    expect(
      screen.getByText("Failed to load currencies. Please try again later.")
    ).toBeInTheDocument();
  });
});
