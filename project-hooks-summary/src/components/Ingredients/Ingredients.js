import React, { useEffect, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/use-http";

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...state, action.ingredient];
    case "DELETE":
      return state.filter((ing) => ing.id !== action.id);
    default:
      throw Error("Something went wrong!");
  }
};

function Ingredients() {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);

  const { isLoading, error, data, sendRequest, reset, actionType, extArgs } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error) {
      if (actionType === "ADD")
        dispatchIngredients({
          type: "ADD",
          ingredient: {
            id: data.name,
            ...extArgs,
          },
        });

      if (actionType === "DELETE")
        dispatchIngredients({ type: "DELETE", id: extArgs });
    }
  }, [data, actionType, extArgs, isLoading, error]);

  const addIngredientsHandler = React.useCallback(
    (ingredient) => {
      sendRequest(
        "https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients.json",
        {
          method: "POST",
          body: JSON.stringify(ingredient),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "ADD",
        ingredient
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = React.useCallback(
    (id) => {
      sendRequest(
        `https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients/${id}.json`,
        {
          method: "DELETE",
        },
        "DELETE",
        id
      );
    },
    [sendRequest]
  );

  const filterHandler = React.useCallback((filteredIngredients) => {
    dispatchIngredients({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const ingredientListContent = React.useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={reset}>{error}</ErrorModal>}
      <IngredientForm onAdd={addIngredientsHandler} loading={isLoading} />
      <section>
        <Search onFilter={filterHandler} />
        {ingredientListContent}
      </section>
    </div>
  );
}

export default Ingredients;
