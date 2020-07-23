import React from "react";
import PropTypes from "prop-types";

import "./Icon.css";

const Icon = props => {
  const { customClass, handleClick } = props;
  return <i className={customClass} onClick={handleClick}></i>;
};

Icon.propTypes = {
  customClass: PropTypes.string,
  handleClick: PropTypes.func
};

export default Icon;
