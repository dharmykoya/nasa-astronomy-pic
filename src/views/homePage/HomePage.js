import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "./homepage.action";
import PropTypes from "prop-types";
import Arrow from "../../components/arrow/Arrow";
import Button from "../../components/button/Button";

import "./HomePage.css";
import Loader from "../../components/loader/Loader";

const HomePage = props => {
  const dispatch = useDispatch();

  const { loading, imageDetails, error } = useSelector(state => state.image);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  const selectDatehandler = e => {
    const date = e.target.value;
    dispatch(getImage(date));
  };

  let imageTitle = "...";
  let image;
  let imageDescription = "...";
  let loader = <Loader />;
  if (!loading && imageDetails !== null) {
    imageTitle = imageDetails.title;
    image = imageDetails.url;
    imageDescription = imageDetails.explanation;
  }

  if (error) {
    loader = error;
  }

  return (
    <section className="homepage mt-3">
      <div className="mb-3">{imageTitle}</div>
      <div className="row gallery-container">
        <Arrow side="left" />
        <div>
          <div>
            {loading || error ? (
              <div className="image loader-container">{loader}</div>
            ) : (
              <img src={image} alt="current" className="image img-fluid" />
              // <img
              //   src="https://source.unsplash.com/250x182/?concert,party"
              //   alt="current"
              //   className="image img-fluid"
              // />
            )}
          </div>
          <div className="row action-container mt-3">
            <Button customClassName="btn-danger">Set favourite</Button>
            <input type="date" onChange={selectDatehandler} />
          </div>
        </div>

        <Arrow side="right" />
      </div>
      <div className="description-container">{imageDescription}</div>
    </section>
  );
};

HomePage.propTypes = {
  getImage: PropTypes.func
};

export default HomePage;
