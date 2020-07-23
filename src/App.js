import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./views/homePage/HomePage";
import { setupStore } from "./store/reducer";
import { getFavImages } from "./utils/helper";
import { toggleFavouriteImage } from "./views/homePage/homepage.action";

import "./App.css";
import FavouritePage from "./views/favouritesPage/FavouritePage";

const store = setupStore();

if (localStorage.favImages) {
  const images = getFavImages();
  if (images) {
    //dispatch fav images (persisting the store)
    store.dispatch(toggleFavouriteImage(images));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/" className="logo">
              Nasa Astronomy Pic
            </Link>
            <div className="ml-auto">
              <Link to="/favourites">Favourites</Link>
            </div>
          </header>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/favourites" exact>
              <FavouritePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
