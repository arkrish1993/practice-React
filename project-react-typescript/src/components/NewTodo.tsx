import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = inputRef.current!.value;
    props.onAddTodo(todoText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input required id="todo" type="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
