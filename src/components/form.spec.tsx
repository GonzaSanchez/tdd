import React from "react";
import { render } from "@testing-library/react";

import { Form } from "./Form";

describe("Form", () => {
  it("render the form", () => {
    const formId = "test123";

    const { getByTestId } = render(<Form testId={formId} />);

    expect(getByTestId(formId)).toBeInTheDocument();
  });
});
