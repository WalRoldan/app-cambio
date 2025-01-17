import { render, screen } from "@testing-library/react";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import "@testing-library/jest-dom";

describe("ExchangeRateDisplay Component", () => {
  const props = {
    amount: 100,
    convertedAmount: 85,
    from: "USD",
    to: "EUR",
    rate: 0.85,
    fromCurrencyName: "US Dollar",
    toCurrencyName: "Euro",
  };

  test("renders amount and convertedAmount correctly", () => {
    render(<ExchangeRateDisplay {...props} />);

    expect(screen.getByText(/100 US Dollar =/)).toBeInTheDocument();
    expect(screen.getByText(/85 Euro/)).toBeInTheDocument();
  });

  test("renders rate correctly", () => {
    render(<ExchangeRateDisplay {...props} />);

    expect(screen.getByText(/1 USD = 0.85 EUR/)).toBeInTheDocument();
  });

  test("renders default values correctly", () => {
    const defaultProps = {
      amount: 0,
      convertedAmount: 0,
      from: "USD",
      to: "EUR",
      rate: 1,
      fromCurrencyName: "US Dollar",
      toCurrencyName: "Euro",
    };

    render(<ExchangeRateDisplay {...defaultProps} />);

    expect(screen.getByText(/0 US Dollar =/)).toBeInTheDocument();
    expect(screen.getByText(/0 Euro/)).toBeInTheDocument();
    expect(screen.getByText(/1 USD = 1 EUR/)).toBeInTheDocument();
  });
});
