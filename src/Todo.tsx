import React from "react";
import "./Todo.css";

function Todo({ text, id, remove }): JSX.Element {
  return (
    <div className="Todo" id={id}>
      <p>{text}</p>
      <button onClick={() => remove(id)}>X</button>
    </div>
  );
}

export default Todo;
