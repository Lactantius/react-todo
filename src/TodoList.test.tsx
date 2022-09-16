import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

jest.mock("uuid", () => ({ v4: () => "123456789" }));

it("renders", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", () => {
  render(<TodoList />);
  expect(screen.getAllByText("X").length).toBe(1);

  // Fill out form
  fireEvent.change(screen.getByLabelText("Todo:"), {
    target: { value: "Test todo" },
  });
  fireEvent.click(screen.getByText("New Todo"));
  expect(screen.getAllByText("X").length).toBe(2);
});

it("can remove a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getByText("X");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
});
