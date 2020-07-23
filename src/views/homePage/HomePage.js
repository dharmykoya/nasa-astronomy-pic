import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getImage } from "./homepage.action";
import PropTypes from "prop-types";
import Arrow from "../../components/arrow/Arrow";
import Button from "../../components/button/Button";

import "./HomePage.css";
import Loader from "../../components/loader/Loader";
import {
  getPrevDayDate,
  getNextDayDate,
  getTodayDate
} from "../../utils/helper";

const HomePage = props => {
  const [selectedDate, setSelectedDate] = useState(getPrevDayDate);

  const dispatch = useDispatch();

  const { loading, imageDetails, error } = useSelector(state => state.image);

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
    console.log("prev", prevDay);
    dispatch(getImage(selectedDate));
  };

  const navigateNextDayHandler = () => {
    const nextDay = getNextDayDate(selectedDate);
    if (nextDay > getTodayDate()) {
      alert("invalid");
    }
    setSelectedDate(nextDay);
    dispatch(getImage(selectedDate));
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
        <Arrow side="left" handleClick={navigatePrevDayHandler} />
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
