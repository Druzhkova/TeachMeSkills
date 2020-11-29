import React, { useState, useCallback } from "react";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "../components";
import { RecipeItem, DetailsPage } from "./components";
import { getRecipeRequest, getMoreRecipeRequest } from "./actions";
import SyncLoader from "react-spinners/SyncLoader";

export function Recipe() {
  const [value, setValue] = useState("");
  const [detailsPageData, setDetailsPageData] = useState(null);
  const dispatch = useDispatch();

  const getRecipe = useCallback(() => {
    dispatch(getRecipeRequest(value));
  }, [dispatch, value]);

  const getMoreRecipe = useCallback(() => {
    dispatch(getMoreRecipeRequest());
  }, [dispatch]);

  const goToDetailsPage = useCallback((recipe) => {
    setDetailsPageData(recipe);
  }, []);

  const { data, loading, loadingMore, errorMessage } = useSelector(
    (state) => state.recipe
  );

  return detailsPageData ? (
    <DetailsPage data={detailsPageData} />
  ) : (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChangeText={setValue} />
        <Button onClick={getRecipe}>Search</Button>
      </form>
      {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
      {loading ? <SyncLoader /> : null}
      {data
        ? data.hits.map(({ recipe }) => (
            <RecipeItem key={recipe.uri} data={recipe} onclick={goToDetailsPage}/>
          ))
        : null}

      {data ? (
        <Button onClick={getMoreRecipe}>
          {loadingMore ? "loading..." : "loading more"}
        </Button>
      ) : null}
    </div>
  );
}
