import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../Button";

const setup = () => {
  const onClick = jest.fn();
  const utils = render(<Button onClick={onClick} />);
  const button = utils.getByRole("button");

  return { button, ...utils, onClick };
};

describe("Button", () => {
  it("Renders the button", () => {
    const { button } = setup();

    expect(button).toBeInTheDocument();
  });

  it("can be clicked", async () => {
    const { button, onClick } = setup();

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
