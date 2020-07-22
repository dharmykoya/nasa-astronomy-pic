import React from "react";
import PropTypes from "prop-types";

import "./Arrow.css";

const Arrow = props => {
  const { side } = props;
  return (
    <div className="navigate-btn">
      <i className={`fas fa-chevron-${side}`} />
    </div>
  );
};

Arrow.propTypes = {
  side: PropTypes.string
};

export default Arrow;
