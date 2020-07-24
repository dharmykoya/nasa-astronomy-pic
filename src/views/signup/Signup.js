import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../components/input/Input";

import "./Signup.css";
import Button from "../../components/button/Button";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "./signup.action";

const Signup = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const { error } = useSelector(state => state.signup);
  const { isAuthenticated } = useSelector(state => state.login);

  const dispatch = useDispatch();
  const history = useHistory();

  const inputChangeHandler = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "password") {
      setPassword(inputValue);
    } else if (inputName === "confirmPassword") {
      setConfirmPassword(inputValue);
    }
    return;
  };

  const handleSignup = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setCheckPassword("password and confirm password must match");
      return;
    }
    dispatch(signupUser(email, password, history));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section>
      <div className="auth-container col-md-3">
        <div className="text-left">
          <h4 className="text-bold">Create an account</h4>
          <div>
            <p className="small-info-text auth-question">
              Have you already registered?
              <Link className="font-bold ml-1 info-text" to="/signin">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <form>
          <Input
            type="text"
            name="email"
            customClassName="form-control auth-input mb-3"
            handleChange={inputChangeHandler}
            placeHolder="Email"
            id="email"
            value={email}
          />

          <Input
            type="password"
            name="password"
            customClassName="form-control auth-input mb-3"
            placeHolder="Password"
            id="password"
            handleChange={inputChangeHandler}
            value={password}
          />

          <Input
            type="password"
            name="confirmPassword"
            customClassName="form-control auth-input"
            placeHolder="Confirm Password"
            id="confirmPassword"
            handleChange={inputChangeHandler}
            value={confirmPassword}
          />
          {confirmPassword ? (
            <div className="text-danger check-pass">{checkPassword}</div>
          ) : (
            ""
          )}
          <div className="auth-button-container">
            <Button customClassName="auth-button" clickHandler={handleSignup}>
              Sign me up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

Signup.propTypes = {
  signupUser: PropTypes.func
};

export default Signup;
