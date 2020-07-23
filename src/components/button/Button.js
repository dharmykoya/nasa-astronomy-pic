import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { children, customClassName, clickHandler } = props;
  return (
    <button className={`btn ${customClassName}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
  customClassName: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
