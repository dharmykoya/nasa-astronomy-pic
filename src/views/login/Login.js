import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./Login.css";
import { loginUser } from "./login.action";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const inputChangeHandler = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "password") {
      setPassword(inputValue);
    }
    return;
  };

  const handleLogin = event => {
    event.preventDefault();
    dispatch(loginUser(email, password, history));
  };
  return (
    <section>
      <div className="auth-container col-md-3">
        <div className="text-left">
          <h4 className="text-bold">Login</h4>
          <div>
            <p className="small-info-text auth-question">
              New user?
              <Link className="font-bold ml-1" to="/signup">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
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

          <div className="auth-button-container">
            <Button customClassName="auth-button" clickHandler={handleLogin}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func
};

export default Login;
