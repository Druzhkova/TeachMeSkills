import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { getRecipeMiddleware, getMoreRecipeMiddleware } from "../Recipe";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(getRecipeMiddleware, getMoreRecipeMiddleware))
);
