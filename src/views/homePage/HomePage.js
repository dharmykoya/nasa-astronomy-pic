import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, toggleFavourite } from "./homepage.action";
import PropTypes from "prop-types";
import Arrow from "../../components/arrow/Arrow";

import "./HomePage.css";
import Loader from "../../components/loader/Loader";
import {
  getPrevDayDate,
  getNextDayDate,
  getTodayDate
} from "../../utils/helper";
import Icon from "../../components/icon/Icon";
import { useHistory } from "react-router-dom";

const HomePage = props => {
  const [selectedDate, setSelectedDate] = useState(getPrevDayDate);

  const dispatch = useDispatch();

  const history = useHistory();

  const { loading, imageDetails, error, favouriteImages } = useSelector(
    state => state.image
  );

  const { login, signup } = useSelector(state => state);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  const selectDatehandler = e => {
    const date = e.target.value;
    setSelectedDate(date);
    dispatch(getImage(date));
  };

  const navigatePrevDayHandler = () => {
    const prevDay = getPrevDayDate(selectedDate);
    setSelectedDate(prevDay);
    dispatch(getImage(selectedDate));
  };

  const navigateNextDayHandler = () => {
    const nextDay = getNextDayDate(selectedDate);
    if (nextDay > getTodayDate()) {
      return;
    }
    setSelectedDate(nextDay);
    dispatch(getImage(selectedDate));
  };

  const toggleFavoriteHandler = () => {
    if (login.isAuthenticated || signup.isAuthenticated) {
      dispatch(toggleFavourite(selectedDate));
      return;
    }
    history.push({
      pathname: "/signin",
      state: { from: history.location.pathname }
    });
  };

  let imageTitle = "...";
  let image;
  let imageDescription = "...";
  let loader = <Loader />;
  let invalidImage;
  if (!loading && imageDetails !== null) {
    imageTitle = imageDetails.title;
    image = imageDetails.url;

    if (image.includes("youtube")) {
      invalidImage = "invalid Image";
    }

    imageDescription = imageDetails.explanation;
  }

  if (error) {
    loader = error;
  }

  let isFavourited;
  if (favouriteImages) {
    isFavourited = favouriteImages.find(image => image.date === selectedDate);
  }

  if (invalidImage) {
    loader = "";
  }

  return (
    <section className="homepage mt-3">
      <div className="mb-3">
        <h3>{imageTitle}</h3>
      </div>
      <div className="row gallery-container">
        <Arrow side="left" handleClick={navigatePrevDayHandler} />
        <div className="img-cont">
          <div>
            {loading || error || invalidImage ? (
              <div className="image loader-container">
                {loader || invalidImage}
              </div>
            ) : (
              <img src={image} alt="current" className="image img-fluid" />
            )}
          </div>
          <div className="row action-container mt-3">
            {isFavourited ? (
              <Icon
                customClass="fas fa-heart favourite filled-heart"
                handleClick={toggleFavoriteHandler}
              />
            ) : (
              <Icon
                handleClick={toggleFavoriteHandler}
                customClass="far fa-heart favourite"
              />
            )}
            <input
              type="date"
              onChange={selectDatehandler}
              value={selectedDate}
              max={getTodayDate()}
            />
          </div>
        </div>

        <Arrow side="right" handleClick={navigateNextDayHandler} />
      </div>
      <div className="description-container">{imageDescription}</div>
    </section>
  );
};

HomePage.propTypes = {
  getImage: PropTypes.func
};

export default HomePage;
