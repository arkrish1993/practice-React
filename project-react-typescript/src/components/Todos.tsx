import React from "react";
import TodoType from "../models/TodoModel";
import Todo from "./Todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: TodoType[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todo
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
