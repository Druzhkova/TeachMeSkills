import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "./rootReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { weatherMiddleware } from "../Weather";

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(weatherMiddleware))
);
