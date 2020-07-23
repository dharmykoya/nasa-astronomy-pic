import React from "react";
import "./App.css";
import HomePage from "./views/homePage/HomePage";
import { setupStore } from "./store/reducer";
import { Provider } from "react-redux";
import { getFavImages } from "./utils/helper";
import { toggleFavouriteImage } from "./views/homePage/homepage.action";

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
      <div className="App">
        <header className="App-header">Nasa Astronomy Pic</header>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
