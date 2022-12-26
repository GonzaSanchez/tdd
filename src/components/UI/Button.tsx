import React, { MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick }: ButtonProps) => (
  <button type="submit" role="button" onClick={onClick}>
    click me
  </button>
);
