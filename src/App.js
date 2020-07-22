import React from "react";
import "./App.css";
import HomePage from "./views/homePage/HomePage";
import { setupStore } from "./store/reducer";
import { Provider } from "react-redux";

const store = setupStore();

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
