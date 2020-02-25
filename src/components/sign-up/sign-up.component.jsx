import React from "react";

import { connect } from 'react-redux'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from '../../redux/user/user.action'

import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { signUpStart } = this.props

    const { displayName, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ email, password, displayName })
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => { });
  };

  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            value={displayName}
            label="displayName"
            required
          />
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmpassword"
            handleChange={this.handleChange}
            value={confirmpassword}
            label="confirmpassword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: data => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp);
