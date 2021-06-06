import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +inputRef.current.value;
    if (enteredAmount && (enteredAmount < 1 || enteredAmount > 5)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    cartCtx.addItem({ ...props.meal, amount: enteredAmount });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.meal.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add</button>
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
