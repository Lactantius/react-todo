import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

jest.mock("uuid", () => ({ v4: () => "123456789" }));

it("renders", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
