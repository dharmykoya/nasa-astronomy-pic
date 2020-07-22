import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { children, customClassName } = props;
  return <button className={`btn ${customClassName}`}>{children}</button>;
};

Button.propTypes = {
  btnName: PropTypes.string,
  customClassName: PropTypes.string
};

export default Button;
