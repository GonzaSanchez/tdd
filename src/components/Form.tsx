import React from "react";

interface FormProps {
  children?: React.ReactNode;
  testId?: string;
}

export const Form = ({ children, testId }: FormProps) => {
  return <form data-testid={testId}>{children}</form>;
};
