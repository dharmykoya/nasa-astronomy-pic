import { combineReducers } from "redux";
import homepageReducer from "../../views/homePage/homepage.reducer";
import signupReducer from "../../views/signup/signup.reducer";
const rootReducer = combineReducers({
  image: homepageReducer,
  signup: signupReducer
});

export default rootReducer;
