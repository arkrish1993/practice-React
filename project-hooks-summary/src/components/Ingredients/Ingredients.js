import React, { useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

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

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...state, loading: false };
    case "ERROR":
      return { loading: false, error: action.error };
    case "RESET":
      return { loading: false, error: null };
    default:
      throw Error("Something went wrong!");
  }
};

function Ingredients() {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const addIngredientsHandler = React.useCallback((ingredient) => {
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((id) => {
        dispatchIngredients({
          type: "ADD",
          ingredient: {
            id: id,
            ...ingredient,
          },
        });
        dispatchHttp({ type: "RESPONSE" });
      })
      .catch((error) => dispatchHttp({ type: "ERROR", error: error.message }));
  }, []);

  const removeIngredientHandler = React.useCallback((id) => {
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        dispatchIngredients({ type: "DELETE", id: id });
        dispatchHttp({ type: "RESPONSE" });
      })
      .catch((error) => dispatchHttp({ type: "ERROR", error: error.message }));
  }, []);

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
      {httpState.error && (
        <ErrorModal
          onClose={() => {
            dispatchHttp({ type: "RESET" });
          }}
        >
          {httpState.error}
        </ErrorModal>
      )}
      <IngredientForm
        onAdd={addIngredientsHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onFilter={filterHandler} />
        {ingredientListContent}
      </section>
    </div>
  );
}

export default Ingredients;
