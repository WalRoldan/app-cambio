import { render, screen, waitFor } from "@testing-library/react";
import CurrencyConverter from "./CurrencyConverter";
import useCurrencyStore from "../store/currencyStore";
import useGetTitle from "../hooks/useGetTitle";
import "@testing-library/jest-dom";

jest.mock("../store/currencyStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../hooks/useGetTitle", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("CurrencyConverter Component", () => {
  it("debe mostrar el componente de carga mientras se obtiene la información de divisas", () => {
    useCurrencyStore.mockReturnValue({
      loading: true,
      error: null,
      fetchCurrencies: jest.fn(),
    });
    useGetTitle.mockReturnValue("Currency Converter");

    render(<CurrencyConverter />);

    expect(screen.getByTestId("loading-currencies")).toBeInTheDocument();
  });

  it("debe mostrar un mensaje de error si hay un error al cargar las divisas", () => {
    useCurrencyStore.mockReturnValue({
      loading: false,
      error: true,
      fetchCurrencies: jest.fn(),
    });
    useGetTitle.mockReturnValue("Currency Converter");

    render(<CurrencyConverter />);

    expect(screen.getByText(/Failed to load currencies/)).toBeInTheDocument();
  });
});
