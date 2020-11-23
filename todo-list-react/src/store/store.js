import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReduser,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);
