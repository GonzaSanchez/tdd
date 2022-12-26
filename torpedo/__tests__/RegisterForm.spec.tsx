import { render } from "@testing-library/react";

import { RegisterForm } from "../RegisterForm";
import React from "react";
import userEvent from "@testing-library/user-event";

const setup = () => {
  const utils = render(<RegisterForm />);
  const input = utils.getByRole("input") as HTMLInputElement;
  const button = utils.getByRole("button") as HTMLButtonElement;
  const form = utils.getByRole("form") as HTMLFormElement;

  return { ...utils, input, form, button };
};

describe("RegisterForm", () => {
  it("receives a name and reflects it", async () => {
    const expectedName = "Gonzalo";
    const { input, getByDisplayValue } = setup();

    await userEvent.type(input, expectedName);

    expect(getByDisplayValue(expectedName)).toBeInTheDocument();
  });

  it("registers an user and gives feedback", async () => {
    const { input, button, getByText } = setup();

    await userEvent.type(input, "Gonzalo");
    await userEvent.click(button);

    expect(getByText("registered")).toBeInTheDocument();
  });
});
