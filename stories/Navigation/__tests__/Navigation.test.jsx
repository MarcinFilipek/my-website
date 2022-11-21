import { render, screen } from "@testing-library/react";
import { Navigation } from "../Navigation";
import "@testing-library/jest-dom";

describe("PostWidget", () => {
  const navItems = [
    { id: 0, text: "Home", href: "#" },
    { id: 1, text: "Blog", href: "#" },
    { id: 2, text: "About", href: "#" },
  ];

  it("render navigation container", () => {
    render(<Navigation navItems={navItems} />);
    const container = screen.getByTestId("navigation");
    expect(container).toBeInTheDocument();
  });
});
