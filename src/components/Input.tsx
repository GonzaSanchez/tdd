import React, { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ label, onChange }: InputProps): JSX.Element => {
  return (
    <label>
      {label}
      <input aria-label="input" type="text" onChange={onChange} />
    </label>
  );
};
