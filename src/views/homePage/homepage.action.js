import axios from "axios";
import {
  GET_IMAGE_START,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILED,
  TOGGLE_FAVORITE_IMAGE
} from "../../store/actionTypes";
import { getPrevDayDate, findImage } from "../../utils/helper";

const getImageStart = () => {
  return {
    type: GET_IMAGE_START
  };
};

const getImageSuccess = imageDetails => {
  return {
    type: GET_IMAGE_SUCCESS,
    imageDetails
  };
};

const getImageFailed = error => {
  return {
    type: GET_IMAGE_FAILED,
    error
  };
};

export const toggleFavouriteImage = images => {
  return {
    type: TOGGLE_FAVORITE_IMAGE,
    images
  };
};

export const getImage = date => async dispatch => {
  try {
    if (date === "" || date === undefined) {
      date = getPrevDayDate();
    }

    dispatch(getImageStart());

    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${date}`
    );

    const images = JSON.parse(localStorage.getItem("images")) || {};
    images[date] = data;
    localStorage.setItem("images", JSON.stringify(images));

    dispatch(getImageSuccess(data));
  } catch (error) {
    const { data } = error.response;

    dispatch(getImageFailed(data));
  }
};

export const toggleFavourite = date => async dispatch => {
  try {
    const image = findImage(date);

    const favImages = JSON.parse(localStorage.getItem("favImages")) || [];

    const isFavourited = favImages.filter(image => image.date === date);

    let newFavImages;

    if (isFavourited.length > 0) {
      newFavImages = favImages.filter(image => image.date !== date);
    } else {
      newFavImages = [...favImages, image];
    }

    localStorage.setItem("favImages", JSON.stringify(newFavImages));

    dispatch(toggleFavouriteImage(newFavImages));
  } catch (error) {
    const { data } = error.response;
    dispatch(getImageFailed(data));
  }
};
