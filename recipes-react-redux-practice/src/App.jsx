import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Recipe } from "./Recipe";

function App() {
  return (
    <Provider store={store}>
      <Recipe />
    </Provider>
  );
}

export default App;
