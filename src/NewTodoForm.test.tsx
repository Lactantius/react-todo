import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders", () => {
  render(<NewTodoForm add={() => null} />);
});
