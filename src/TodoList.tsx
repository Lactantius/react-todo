import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(): JSX.Element {
  const [todos, setTodos] = useState([{ text: "Make some todos", id: uuid() }]);

  const addTodo = (todo: string) =>
    setTodos((oldTodos) => [...oldTodos, { text: todo, id: uuid() }]);

  const removeTodo = (id: string) =>
    setTodos((oldTodos) => oldTodos.filter((todo) => id !== todo.id));

  return (
    <div className="TodoList">
      <NewTodoForm add={addTodo} />
      <div className="TodoList-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            remove={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
