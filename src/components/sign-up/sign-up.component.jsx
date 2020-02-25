import React, { useState } from "react";

import { connect } from 'react-redux'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from '../../redux/user/user.action'

import "./sign-up.style.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: ""
  })
  const { displayName, email, password, confirmpassword } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmpassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ email, password, displayName })
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={displayName}
          label="displayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmpassword"
          handleChange={handleChange}
          value={confirmpassword}
          label="confirmpassword"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: data => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp);
