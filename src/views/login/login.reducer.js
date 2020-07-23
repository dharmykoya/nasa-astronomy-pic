import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT
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

const logout = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    user: null,
    isAuthenticated: false,
    token: null
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return loginStart(state);

    case LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case LOGIN_FAIL:
      return loginFail(state, action);

    case USER_LOGOUT:
      return logout(state);

    default:
      return state;
  }
};
