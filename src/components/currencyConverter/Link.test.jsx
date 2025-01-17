import { render, screen } from "@testing-library/react";
import Link from "./Link";
import "@testing-library/jest-dom";

describe("Link Component", () => {
  test("renders with correct href and target attributes", () => {
    const href = "https://example.com";

    render(<Link href={href}>Click me</Link>);

    const linkElement = screen.getByText("Click me");

    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("applies custom className", () => {
    render(
      <Link href="https://example.com" className="custom-class">
        Click me
      </Link>
    );

    const linkElement = screen.getByText("Click me");

    expect(linkElement).toHaveClass("custom-class");
  });

  test("renders children correctly", () => {
    render(<Link href="https://example.com">Test Link</Link>);

    const linkElement = screen.getByText("Test Link");

    expect(linkElement).toHaveTextContent("Test Link");
  });
});
