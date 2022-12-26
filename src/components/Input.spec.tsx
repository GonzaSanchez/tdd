import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./Input";

const setup = () => {
  const label = "label";
  const utils = render(<Input label={label} />);
  const input = utils.getByLabelText("input") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe("Input", () => {
  it("render the input", async () => {
    const { input } = setup();
    const expectedText = "text123";

    await userEvent.type(input, expectedText);

    expect(input.value).toBe(expectedText);
  });
});
