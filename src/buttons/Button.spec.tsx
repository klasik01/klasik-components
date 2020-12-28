import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "./Button";

test('displays a primary button', async () => {
  const { getByText } = render(<PrimaryButton onClick={() => {}} color1="black" color2="white" label="Click on me!"  className="" inverse={false} />);
  const button = getByText('button')

  await fireEvent.click(button);
  expect(button).toHaveTextContent('Click on me!');
});

test("should return true", () => {
  expect(true).toBe(true);
});
