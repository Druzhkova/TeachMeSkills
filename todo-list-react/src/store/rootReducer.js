import { combineReducers } from "redux";
import { todoListReducer } from "../TodoList";

export const rootReduser = combineReducers({ todoList: todoListReducer });
