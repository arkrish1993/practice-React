import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const defaultInput = { title: "", amount: "" };
const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState(defaultInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(inputState);
    setInputState(defaultInput);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(event) => {
                const newTitle = event.target.value;
                setInputState((prevInputState) => ({
                  title: newTitle,
                  amount: prevInputState.amount,
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(event) => {
                const newAmount = event.target.value;
                setInputState((prevInputState) => ({
                  amount: newAmount,
                  title: prevInputState.title,
                }));
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
