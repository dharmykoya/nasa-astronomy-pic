import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/button/Button";

import "./FavouritePage.css";
import ImageCard from "../../components/imageCard/ImageCard";
import { deleteAllFav } from "../homePage/homepage.action";

const FavouritePage = () => {
  const dispatch = useDispatch();

  const { favouriteImages } = useSelector(state => state.image);

  const deleteAllFavouritesHandler = () => {
    dispatch(deleteAllFav());
  };

  let displayImages = (
    <div className="text-center">No Favourite picture is available</div>
  );
  if (favouriteImages && favouriteImages !== null) {
    displayImages = favouriteImages.map((image, index) => (
      <ImageCard key={index} image={image.url} title={image.title} />
    ));
  }

  return (
    <section>
      <div className="container">
        <Button
          customClassName="btn-danger delete-fav mt-3 ml-auto"
          clickHandler={deleteAllFavouritesHandler}
        >
          Delete All
        </Button>
        <h3>My Favourites</h3>
        <div className="row favourite-container mt-4">{displayImages}</div>
      </div>
    </section>
  );
};

FavouritePage.propTypes = {};

export default FavouritePage;
