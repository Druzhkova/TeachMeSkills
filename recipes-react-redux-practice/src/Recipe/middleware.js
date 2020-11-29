import {
  GET_RECIPE_REQUEST,
  GET_MORE_RECIPE_REQUEST,
  getRecipeSuccess,
  getRecipeFailure,
  getMoreRecipeSuccess,
  getMoreRecipeFailure,
} from "./actions";

export const getRecipeMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_RECIPE_REQUEST) {
    fetch(
      `https://api.edamam.com/search?q=${action.payload}&app_id=2e543187&app_key=a39970e257684f066e09cb21cb48f43c`
    )
      .then((res) => res.json())
      .then((response) => {
        store.dispatch(getRecipeSuccess(response));
      })
      .catch((error) => {
        store.dispatch(getRecipeFailure(error.message));
      });
  }
  next(action);
};

export const getMoreRecipeMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_MORE_RECIPE_REQUEST) {
    const {
      recipe: { data },
    } = store.getState();

    if (data) {
      const { q, to } = data;
      fetch(
        `https://api.edamam.com/search?q=${q}&app_id=2e543187&app_key=a39970e257684f066e09cb21cb48f43c&from=${to}`
      )
        .then((res) => res.json())
        .then((response) => {
          store.dispatch(getMoreRecipeSuccess(response));
        })
        .catch((error) => {
          store.dispatch(getMoreRecipeFailure(error.message));
        });
    }
  }
  next(action);
};
