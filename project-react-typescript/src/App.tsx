import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/TodoModel";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
