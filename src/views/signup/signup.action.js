import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from "../../store/actionTypes";
import { auth } from "../../config/firebase";

export const signupStart = () => {
  return {
    type: SIGN_UP_START
  };
};

export const signupSuccess = authData => {
  return {
    type: SIGN_UP_SUCCESS,
    authData
  };
};

export const signupFailed = authError => {
  return {
    type: SIGN_UP_FAIL,
    authError
  };
};

export const signupUser = (email, password, history) => async dispatch => {
  try {
    dispatch(signupStart());
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    const newUser = JSON.stringify(user);

    localStorage.setItem("user", newUser);

    dispatch(signupSuccess(user));
    history.push("/favourites");
  } catch (err) {
    console.log(44, err);
    const error = err.toString();
    dispatch(signupFailed(error));
  }
};
