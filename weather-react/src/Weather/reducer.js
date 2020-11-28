import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "./actions";

let initialState = {
  data: [],
  loading: false,
  errorMessage: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    }

    case GET_WEATHER_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
