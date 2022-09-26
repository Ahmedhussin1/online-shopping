import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, conformPassword } = formField;
  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  console.log(formField);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != conformPassword) {
      alert("Password Do Not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserDocumentFromAuth(user, { displayName });
      resetFormField();
      console.log(user);
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("error massage: ", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
        <h2>Dont have an account</h2>
      <span>Sign up with email and password </span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
        label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        
        <FormInput
        label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
        label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="conformPassword"
          value={conformPassword}
        />

        <Button  type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
