import React, { MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick }: ButtonProps) => (
  <button type="submit" aria-label="submit button" onClick={onClick}>
    click me
  </button>
);
