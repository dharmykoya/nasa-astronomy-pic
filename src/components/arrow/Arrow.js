import React from "react";
import PropTypes from "prop-types";

import "./Arrow.css";

const Arrow = props => {
  const { side, handleClick } = props;
  return (
    <div className="navigate-btn" onClick={handleClick}>
      <i className={`fas fa-chevron-${side} orange`} />
    </div>
  );
};

Arrow.propTypes = {
  side: PropTypes.string,
  handleClick: PropTypes.func
};

export default Arrow;
