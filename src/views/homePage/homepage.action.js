import axios from "axios";
import {
  GET_IMAGE_START,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILED
} from "../../store/actionTypes";
import { getPrevDayDate } from "../../utils/helper";

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

export const getImage = date => async dispatch => {
  try {
    if (date === "" || date === undefined) {
      date = getPrevDayDate();
    }

    dispatch(getImageStart());

    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${date}`
    );
    dispatch(getImageSuccess(data));
  } catch (error) {
    const { data } = error.response;
    dispatch(getImageFailed(data.msg));
  }
};
