import { render } from "@testing-library/react";
import { PostWidget } from "../PostWidget";

it("renders homepage unchanged", () => {
  const { container } = render(<PostWidget title={"Title"} />);
  expect(container).toMatchSnapshot();
});
