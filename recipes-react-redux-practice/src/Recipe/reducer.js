import {
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
  GET_MORE_RECIPE_SUCCESS,
  GET_MORE_RECIPE_FAILURE,
  GET_MORE_RECIPE_REQUEST,
} from "./actions";

const initionState = {
  data: null,
  loading: false,
  loadingMore: false,
  errorMessage: null,
};

export const recipeReducer = (state = initionState, action) => {
  switch (action.type) {
    case GET_RECIPE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case GET_RECIPE_REQUEST: {
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    }

    case GET_RECIPE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    }

    case GET_MORE_RECIPE_SUCCESS: {
      return {
        ...state,
        loadingMore: false,
        data: {
          ...action.payload,
          hits: [...state.data.hits, ...action.payload.hits],
        },
      };
    }

    case GET_MORE_RECIPE_REQUEST: {
      return {
        ...state,
        errorMessage: null,
        loadingMore: true,
      };
    }

    case GET_MORE_RECIPE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loadingMore: false,
      };
    }

    default:
      return state;
  }
};
