import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIngredientsHandler = (ingredient) => {
    setIsLoading(true);
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
        setIngredients((prevState) => [
          ...prevState,
          {
            id: id,
            ...ingredient,
          },
        ]);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    fetch(
      `https://udemy-http-1c237-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIngredients((prevState) =>
          prevState.filter((ingredient) => ingredient.id !== id)
        );
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  const filterHandler = React.useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      {error && (
        <ErrorModal
          onClose={() => {
            setError(null);
            setIsLoading(false);
          }}
        >
          {error}
        </ErrorModal>
      )}
      <IngredientForm onAdd={addIngredientsHandler} loading={isLoading} />

      <section>
        <Search onFilter={filterHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
