import React, { useState } from "react";
import "./NewTodoForm.css";

interface TodoFormData {
  text: string;
}

interface TodoFormArgs {
  add: Function;
}

function NewTodoForm({ add }: TodoFormArgs): JSX.Element {
  const INITIAL_FORM_DATA: TodoFormData = {
    text: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    add(formData);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <label htmlFor="text">Todo: </label>
      <input
        name="text"
        id="text"
        type="text"
        placeholder="What needs to get done?"
        value={formData.text}
        onChange={handleChange}
      />
      <button>New Todo</button>
    </form>
  );
}

export default NewTodoForm;
