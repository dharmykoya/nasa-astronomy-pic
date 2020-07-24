import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./views/homePage/HomePage";
import { setupStore } from "./store/reducer";
import { getFavImages, checkAuth, getUser } from "./utils/helper";
import { toggleFavouriteImage } from "./views/homePage/homepage.action";

import "./App.css";
import FavouritePage from "./views/favouritesPage/FavouritePage";
import Signup from "./views/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Login from "./views/login/Login";
import { loginSuccess } from "./views/login/login.action";
import PrivateRoute from "./views/privateRoute/PrivateRoute";

const store = setupStore();

if (localStorage.user) {
  const isAuthenticated = checkAuth();
  if (isAuthenticated) {
    //dispatch user details
    const user = getUser();
    store.dispatch(loginSuccess(user));
  }
}

if (localStorage.favImages) {
  const images = getFavImages();
  if (images) {
    //dispatch fav images (persisting the store)
    store.dispatch(toggleFavouriteImage(images));
  }
}

function NoMatch() {
  let location = useLocation();

  return (
    <div className="no-match">
      <h3>
        No match for
        <code>{location.pathname}</code>
        <br />
        Error 404
      </h3>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <PrivateRoute path="/favourites" exact>
              <FavouritePage />
            </PrivateRoute>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/signin" exact>
              <Login />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
