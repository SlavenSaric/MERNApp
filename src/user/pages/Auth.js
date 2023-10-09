import React from "react";

import "./Auth.css";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import {useForm} from '../../shared/hooks/form-hook'

const Auth = () => {

  const [formState, inputHandler] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)

  const AuthSubmitHandler =(e) => {
    e.preventDefault()
    console.log(formState.inputs);
  }

  return (
    <Card className="authentication padd">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={AuthSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please entere a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please entere a valid password."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
      </form>
    </Card>
  );
};

export default Auth;
