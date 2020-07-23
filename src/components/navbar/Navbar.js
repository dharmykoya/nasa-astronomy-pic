import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.login);

  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;

  const onLogoutHandler = () => {
    // dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="logo">
        Nasa Astronomy Pic
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        {isAuthenticated ? (
          <ul className="navbar-nav mr-auto">
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
            <Link to="/logout" className="nav-link logo">
              Logout
            </Link>
            <span class="navbar-text">{user.email}</span>{" "}
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link logo">
              Signup
            </Link>
            <Link to="/signin" className="nav-link logo">
              Login
            </Link>
          </>
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
