import React from "react";
import "./App.css";
import TodoList from "./TodoList";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList />
    </div>
  );
}

export default App;
