import React from "react";
import "./Todo.css";

interface TodoArgs {
  text: string;
  id: string;
  remove: Function;
}

function Todo({ text, id, remove }: TodoArgs): JSX.Element {
  return (
    <div className="Todo" id={id}>
      <span>{text}</span>
      <button onClick={() => remove(id)}>X</button>
    </div>
  );
}

export default Todo;
