import { combineReducers } from "redux";
import homepageReducer from "../../views/homePage/homepage.reducer";
const rootReducer = combineReducers({
  image: homepageReducer
});

export default rootReducer;
