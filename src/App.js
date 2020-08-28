import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import configureStore from './stores/index'
import Counter from "./components/Counter";

let store= configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
