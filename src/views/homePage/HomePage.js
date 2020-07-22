import React from "react";
import "./HomePage.css";
import PropTypes from "prop-types";
import Arrow from "../../components/arrow/Arrow";
import Button from "../../components/button/Button";

const HomePage = props => {
  return (
    <section className="homepage">
      <div>title</div>
      <div className="row gallery-container">
        <Arrow side="left" />
        <div>
          <div>
            <img
              src="https://source.unsplash.com/900x482/?concert,party"
              alt="current"
              className="image img-fluid"
            />
          </div>
          <div className="row action-container mt-3">
            <Button customClassName="btn-danger">Set favourite</Button>
            <Button customClassName="btn-primary">Today</Button>
          </div>
        </div>

        <Arrow side="right" />
      </div>

      <div className="description-container">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </section>
  );
};

HomePage.propTypes = {};

export default HomePage;
