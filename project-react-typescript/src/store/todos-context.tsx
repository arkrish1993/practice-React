import React, { useState } from "react";
import Todo from "../models/TodoModel";

type TodosCtxType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosCtxType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [state, setState] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setState((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setState((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodosContext.Provider
      value={{
        items: state,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
