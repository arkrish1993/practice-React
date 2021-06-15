class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.id = "id:" + todoText;
    this.text = todoText;
  }
}

export default Todo;
