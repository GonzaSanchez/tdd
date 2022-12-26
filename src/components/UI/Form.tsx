import React from "react";

interface FormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
  testId?: string;
}

export const Form = ({ children, testId, onSubmit }: FormProps) => {
  return (
    <form role="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
