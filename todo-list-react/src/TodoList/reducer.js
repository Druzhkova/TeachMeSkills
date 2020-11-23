import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_TODO_COMPLETION_STATUS,
  CHANGE_CURRENT_PAGE,
} from "./actions";

const initialState = {
  currentPage: "all",
  todos: [],
};

export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
            isCompleted: false,
            id: String(Math.random()),
          },
        ],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id === action.payload),
      };
    }

    case CHANGE_TODO_COMPLETION_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        }),
      };
    }

    default:
      return state;
  }
}
