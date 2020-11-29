import { combineReducers } from "redux";
import { recipeReducer } from "../Recipe";

export const rootReducer = combineReducers({
  recipe: recipeReducer,
});
