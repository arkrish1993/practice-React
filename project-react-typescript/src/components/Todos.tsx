import React from "react";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "./Todo";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Todo
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
