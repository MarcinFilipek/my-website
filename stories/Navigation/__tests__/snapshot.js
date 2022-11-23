import { render } from "@testing-library/react";
import { Navigation } from "../Navigation";

it("renders homepage unchanged", () => {
  const navItems = [
    { id: 0, text: "Home", href: "#" },
    { id: 1, text: "Blog", href: "#" },
    { id: 2, text: "About", href: "#" },
  ];
  const { container } = render(<Navigation navItems={navItems} />);
  expect(container).toMatchSnapshot();
});
