import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("list contains 5 animals", () => {
  render(<App />);

  const listElements = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElements).toBeInTheDocument();
  expect(listElements).toHaveClass("animals");
  expect(listItems.length).toEqual(5);
});
