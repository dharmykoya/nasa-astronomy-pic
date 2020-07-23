import { combineReducers } from "redux";
import homepageReducer from "../../views/homePage/homepage.reducer";
import signupReducer from "../../views/signup/signup.reducer";
import loginReducer from "../../views/login/login.reducer";
const rootReducer = combineReducers({
  image: homepageReducer,
  signup: signupReducer,
  login: loginReducer
});

export default rootReducer;
