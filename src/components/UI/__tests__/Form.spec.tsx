import React from "react";
import { findByPlaceholderText, render } from "@testing-library/react";

import { Form } from "../Form";

const setup = () => {
  const utils = render(<Form />);
  const form = utils.getByRole("form");

  return { ...utils, form };
};

describe("Form", () => {
  it("render the form", () => {
    const { form } = setup();

    expect(form).toBeInTheDocument();
  });
});
