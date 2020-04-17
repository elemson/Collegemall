import React, { Component, useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../redux/user/user.actions";

const SignIn = (props) => {
  const { googleSignInStart } = props;
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    setUserCredentials({ email, password });
  };

  const { email, password } = userCredentials;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <label>password</label>
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
