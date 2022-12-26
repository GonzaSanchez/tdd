import React, { FormEventHandler, useState } from "react";

import { Button, Form, Input } from "./UI";

export const RegisterForm = () => {
  const [submitted, isSubmitted] = useState(false);
  const submitForm: FormEventHandler = (event) => {
    event.preventDefault();
    isSubmitted(true);
  };

  return submitted ? (
    <div>registered</div>
  ) : (
    <Form onSubmit={submitForm}>
      <Input />
      <Button />
    </Form>
  );
};
