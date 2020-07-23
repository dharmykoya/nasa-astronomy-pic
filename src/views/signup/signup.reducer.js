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

const loginStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    user: action.authData,
    loading: false,
    isAuthenticated: true,
    error: null
  });
};

const loginFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.authError
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return loginStart(state);

    case SIGN_UP_SUCCESS:
      return loginSuccess(state, action);

    case SIGN_UP_FAIL:
      return loginFail(state, action);

    default:
      return state;
  }
};
