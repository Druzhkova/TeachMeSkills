import {
  getWeatherFailure,
  GET_WEATHER_REQUEST,
  getWeatherSuccess,
} from "./actions";

export const weatherMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_WEATHER_REQUEST) {
    fetch(
      `http://api.weatherstack.com/current?access_key=c18c9cd0a7159022db85263eea437534&query=${action.payload}`
    )
      .then((res) => res.json())
      .then((response) => {
        const {
          location: { name, country },
          current: { temperature },
        } = response;

        store.dispatch(getWeatherSuccess({ city: name, country, temperature }));
      })
      .catch((error) => {
        store.dispatch(getWeatherFailure(error.message));
      });
  }
  next(action);
};
