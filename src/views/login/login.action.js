import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT
} from "../../store/actionTypes";
import { auth } from "../../config/firebase";

export const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

export const loginSuccess = authData => {
  return {
    type: LOGIN_SUCCESS,
    authData
  };
};

export const loginFailed = authError => {
  return {
    type: LOGIN_FAIL,
    authError
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const loginUser = (email, password, history) => async dispatch => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const newUser = JSON.stringify(user);

    localStorage.setItem("user", newUser);

    dispatch(loginSuccess(user));
    history.push("/");
  } catch (error) {
    dispatch(loginFailed("invalid credentials"));
  }
};
