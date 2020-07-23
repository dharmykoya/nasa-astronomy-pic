import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from "../../store/actionTypes";
import { auth } from "../../config/firebase";

export const loginStart = () => {
  return {
    type: SIGN_UP_START
  };
};

export const loginSuccess = authData => {
  return {
    type: SIGN_UP_SUCCESS,
    authData
  };
};

export const loginFailed = authError => {
  return {
    type: SIGN_UP_FAIL,
    authError
  };
};

export const signupUser = (email, password, history) => async dispatch => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    const newUser = JSON.stringify(user);

    localStorage.setItem("user", newUser);

    dispatch(loginSuccess(user));
    history.push("/favourites");
  } catch (err) {
    console.log(44, err);
    const error = err.toString();
    dispatch(loginFailed(error));
  }
};
