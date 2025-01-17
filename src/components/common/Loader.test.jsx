import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingCurrencies from "./Loader";

describe("LoadingCurrencies Component", () => {
  it("renders the loading spinner", () => {
    render(<LoadingCurrencies />);

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("animate-spin");
  });

  it("renders the loading text", () => {
    render(<LoadingCurrencies />);

    expect(screen.getByText("Loading currencies...")).toBeInTheDocument();
  });

  it("applies the correct styles", () => {
    render(<LoadingCurrencies />);

    const container = screen.getByText("Loading currencies...").parentElement;
    expect(container).toHaveClass(
      "flex",
      "justify-center",
      "items-center",
      "h-32"
    );

    const loadingText = screen.getByText("Loading currencies...");
    expect(loadingText).toHaveClass("ml-4", "text-gray-600");
  });
});
