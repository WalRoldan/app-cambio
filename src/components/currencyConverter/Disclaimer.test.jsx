import { render, screen } from "@testing-library/react";
import Disclaimer from "./Disclaimer";
import { generateCurrencyLink, formatDate } from "../../utils/formats";
import "@testing-library/jest-dom";

jest.mock("../../utils/formats", () => ({
  generateCurrencyLink: jest.fn(),
  formatDate: jest.fn(),
}));

describe("Disclaimer Component", () => {
  it("renders disclaimer text correctly", () => {
    render(
      <Disclaimer
        from="USD"
        to="EUR"
        fromCurrencyName="US Dollar"
        toCurrencyName="Euro"
      />
    );

    expect(
      screen.getByText(/We use the mid-market rate for our Converter/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This is for informational purposes only/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You won’t receive this rate when sending money/)
    ).toBeInTheDocument();
  });

  it("displays the currency names as links with correct href", () => {
    const mockFromLink = "https://www.example.com/USD";
    const mockToLink = "https://www.example.com/EUR";

    generateCurrencyLink
      .mockReturnValueOnce(mockFromLink)
      .mockReturnValueOnce(mockToLink);
    formatDate.mockReturnValueOnce("January 1, 2025");

    render(
      <Disclaimer
        from="USD"
        to="EUR"
        fromCurrencyName="US Dollar"
        toCurrencyName="Euro"
      />
    );

    const fromLink = screen.getByText("US Dollar");
    const toLink = screen.getByText("Euro");

    expect(fromLink).toHaveAttribute("href", mockFromLink);
    expect(toLink).toHaveAttribute("href", mockToLink);
  });
});
