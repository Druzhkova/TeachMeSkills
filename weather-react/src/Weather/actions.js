export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

export function getWeatherRequest(query) {
  return {
    type: GET_WEATHER_REQUEST,
    payload: query,
  };
}

export function getWeatherSuccess(data) {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: data,
  };
}

export function getWeatherFailure(error) {
  return {
    type: GET_WEATHER_FAILURE,
    payload: error,
  };
}
