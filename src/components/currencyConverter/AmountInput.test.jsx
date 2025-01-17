import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AmountInput from "./AmountInput";

describe("AmountInput Component", () => {
  it("renders the input field with the correct label", () => {
    render(<AmountInput value={0} onChange={() => {}} />);

    expect(screen.getByText("Amount")).toBeInTheDocument();

    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });
});
