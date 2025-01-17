import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import "@testing-library/jest-dom";

describe("Dropdown Component", () => {
  const mockOnChange = jest.fn();

  const options = [
    { value: "usd", label: "US Dollar" },
    { value: "eur", label: "Euro" },
    { value: "gbp", label: "British Pound" },
  ];

  test("renders label correctly", () => {
    render(
      <Dropdown
        label="Select Currency"
        options={options}
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("Select Currency")).toBeInTheDocument();
  });

  test("renders options correctly", () => {
    render(
      <Dropdown
        label="Select Currency"
        options={options}
        value=""
        onChange={mockOnChange}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test("selects a value and calls onChange", () => {
    render(
      <Dropdown
        label="Select Currency"
        options={options}
        value="usd"
        onChange={mockOnChange}
      />
    );

    const selectElement = screen.getByRole("combobox");

    expect(selectElement.value).toBe("usd");

    fireEvent.change(selectElement, { target: { value: "eur" } });

    expect(mockOnChange).toHaveBeenCalledWith("eur");
  });

  test("renders with custom className", () => {
    render(
      <Dropdown
        label="Select Currency"
        options={options}
        value=""
        onChange={mockOnChange}
        className="custom-class"
      />
    );

    const dropdownElement = screen.getByRole("combobox").parentElement;

    expect(dropdownElement).toHaveClass("custom-class");
  });

  test("has a disabled option with default text", () => {
    render(
      <Dropdown
        label="Select Currency"
        options={options}
        value=""
        onChange={mockOnChange}
      />
    );

    const firstOption = screen.getByRole("option", {
      name: /Select a currency/i,
    });

    expect(firstOption).toBeDisabled();
  });
});
