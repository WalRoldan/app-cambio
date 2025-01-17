import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
import "@testing-library/jest-dom";

describe("ErrorMessage Component", () => {
  it("renders the error message correctly", () => {
    const errorMessage = "Something went wrong. Please try again later.";

    render(<ErrorMessage message={errorMessage} />);

    expect(screen.getByText("Error")).toBeInTheDocument();

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("applies the correct styles", () => {
    const errorMessage = "Error styles test.";

    render(<ErrorMessage message={errorMessage} />);

    const container = screen.getByText("Error").parentElement;
    expect(container).toHaveClass(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "min-h-[200px]",
      "bg-red-50",
      "border",
      "border-red-200",
      "rounded-md",
      "p-4"
    );

    const messageText = screen.getByText(errorMessage);
    expect(messageText).toHaveClass("text-gray-700", "mt-2");
  });
});
