import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { userLogout } from "../../views/login/login.action";

import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.login);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(userLogout());
  };
  return (
    <nav className="navbar navbar-expand-lg nasa-nav">
      <Link to="/" className="logo">
        Nasa Astronomy Pic
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        {isAuthenticated ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/favourites" className="nav-link logo">
                Favourites
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}

        {isAuthenticated ? (
          <>
            {" "}
            <Link
              to="/signin"
              className="nav-link logo"
              onClick={logoutHandler}
            >
              Logout
            </Link>
            <span className="navbar-text user-email">{user.email}</span>{" "}
          </>
        ) : (
          <div className="ml-auto row">
            <Link to="/signup" className="nav-link logo">
              Signup
            </Link>
            <Link to="/signin" className="nav-link logo">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default Navbar;
