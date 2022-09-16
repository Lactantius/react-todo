import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders", () => {
  render(<Todo text="test" id="12345" remove={() => null} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <Todo text="test" id="12345" remove={() => null} />
  );
  expect(asFragment()).toMatchSnapshot();
});
