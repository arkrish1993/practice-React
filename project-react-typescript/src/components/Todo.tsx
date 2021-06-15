import React from "react";
import TodoType from "../models/TodoModel";
import classes from "./Todo.module.css";

const Todo: React.FC<{ item: TodoType; onRemoveTodo: () => void }> = (
  props
) => {
  const clickHandler = () => {
    props.onRemoveTodo();
  };

  return (
    <li onClick={clickHandler} className={classes.item}>
      {props.item.text}
    </li>
  );
};

export default Todo;
