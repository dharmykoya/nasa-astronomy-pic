import axios from "axios";
import CircularJSON from "circular-json";
import {
  GET_IMAGE_START,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILED,
  TOGGLE_FAVORITE_IMAGE,
  GET_ALL_FAV_IMAGES
} from "../../store/actionTypes";
import {
  findImage,
  getUser,
  getFavImages
} from "../../utils/helper";
import { firestore } from "../../config/firebase";

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

const getAllFavourites = favImages => {
  return {
    type: GET_ALL_FAV_IMAGES,
    favImages
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
    dispatch(getImageStart());

    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${date}`
    );

    const images = JSON.parse(localStorage.getItem("images")) || {};
    images[date] = data;
    localStorage.setItem("images", JSON.stringify(images));

    dispatch(getImageSuccess(data));
  } catch (error) {
    // const { data } = error.response;
    console.log(23, error);

    dispatch(getImageFailed("Network/Invalid Image"));
  }
};

export const getFavourites = () => async dispatch => {
  try {
    const user = getUser();

    const reference = firestore.doc(`users/${user.uid}`);

    const result = [];

    const userFavourites = await firestore
      .collection("favourites")
      .where("user", "==", reference)
      .get();

    userFavourites.forEach(doc => {
      result.push({ ...doc.data(), id: doc.id });
    });

    let favImages;
    if (result.length) {
      favImages = CircularJSON.stringify(result);
      localStorage.setItem("favImages", favImages);

      dispatch(getAllFavourites(result));
    } else {
      favImages = null;

      dispatch(getAllFavourites(null));
    }
  } catch (error) {
    dispatch(getImageFailed(error.message));
  }
};

export const toggleFavourite = date => async dispatch => {
  try {
    const image = findImage(date);

    const favImages = JSON.parse(localStorage.getItem("favImages")) || [];

    const isFavourited = favImages.find(image => image.date === date);

    const user = getUser();

    const reference = firestore.doc(`users/${user.uid}`);

    if (isFavourited) {
      await firestore.collection("favourites").doc(isFavourited.id).delete();
    } else {
      await firestore.collection("favourites").add({
        ...image,
        user: reference
      });
    }
    dispatch(getFavourites());
  } catch (error) {
    // const { data } = error.response;
    dispatch(getImageFailed("something went wrong"));
  }
};

export const deleteAllFav = () => async dispatch => {
  try {
    const favImages = getFavImages();

    localStorage.removeItem("favImages");

    await favImages.forEach(async ({ id }) => {
      await firestore.collection("favourites").doc(id).delete();
    });

    dispatch(toggleFavouriteImage(null));
  } catch (error) {
    // const { data } = error.response;
    dispatch(getImageFailed("something went wrong"));
  }
};
