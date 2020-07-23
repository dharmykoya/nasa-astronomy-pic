import { updateObject } from "../../utils/helper";
import {
  GET_IMAGE_START,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILED
} from "../../store/actionTypes";

const initialState = {
  loading: false,
  imageDetails: null,
  error: null
};

const getImageStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const getImageSuccess = (state, action) => {
  return updateObject(state, {
    imageDetails: action.imageDetails,
    loading: false,
    error: null
  });
};

const getImageFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_START:
      return getImageStart(state, action);
    case GET_IMAGE_SUCCESS:
      return getImageSuccess(state, action);
    case GET_IMAGE_FAILED:
      return getImageFailed(state, action);

    default:
      return state;
  }
};
