import { render, screen } from "@testing-library/react";
import { PostWidget } from "../PostWidget";
import "@testing-library/jest-dom";

describe("PostWidget", () => {
  it("render title", () => {
    render(<PostWidget title="Title" />);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
