import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Input from "./components/Input";
import userEvent from "@testing-library/user-event";

test("input value is updated correctly", async () => {
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");
  await user.type(input, "React");

  expect(input.value).toBe("React");
});

test("callback called when value changed", async () => {
  const handleChange = jest.fn();
  render(<Input handleChange={handleChange} inputValue="" />);
  const input = screen.getByRole("textbox");
  const user = userEvent.setup();
  await user.type(input, "React");
  expect(handleChange).toHaveBeenCalledTimes(5);
});
