import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = props => {
  const {
    type,
    name,
    customClassName,
    value,
    handleChange,
    placeHolder,
    id,
    ...customProps
  } = props;
  return (
    <div>
      <input
        {...customProps}
        type={type}
        placeholder={placeHolder}
        className={customClassName}
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  customClassName: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string
};

export default Input;
