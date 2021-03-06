import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from "../../store/actionTypes";
import { updateObject } from "../../utils/helper";

const initialState = {
  loading: false,
  user: null,
  error: null,
  isAuthenticated: false
};

const signupStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    user: action.authData,
    loading: false,
    isAuthenticated: true,
    error: null
  });
};

const signupFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.authError
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return signupStart(state);

    case SIGN_UP_SUCCESS:
      return signupSuccess(state, action);

    case SIGN_UP_FAIL:
      return signupFail(state, action);

    default:
      return state;
  }
};
