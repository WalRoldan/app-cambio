import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("renders the correct title", () => {
    render(<Header />);

    expect(screen.getByText("Currency Exchange")).toBeInTheDocument();
  });

  it("applies the correct styles", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-customDarkBlue", "text-white", "py-4");

    const title = screen.getByText("Currency Exchange");
    expect(title).toHaveClass(
      "text-start",
      "pl-4",
      "lg:pl-10",
      "text-xl",
      "font-bold"
    );
  });
});
