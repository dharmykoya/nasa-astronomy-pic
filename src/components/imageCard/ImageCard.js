import React from "react";
import PropTypes from "prop-types";

import "./ImageCard.css";

const ImageCard = props => {
  const { image, title } = props;
  let error;
  if (image.includes("youtube")) {
    error = "invalid Image";
  }
  return (
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
      {error ? (
        <div className="fav-image-error">{error}</div>
      ) : (
        <img
          // src="https://source.unsplash.com/550x182/?concert,party"
          src={image}
          alt="current"
          className="img-fluid fav-image"
        />
      )}
      <div className="fav-title">{title}</div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default ImageCard;
