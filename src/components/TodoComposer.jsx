import React, { useState } from "react";

function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 1000000000),
    label: label,
    completed: false,
  };
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = useState("");
  const handleLabelChange = (event) => setLabel(event.target.value);

  const handleAddClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <div className="py-4">
      <div className="flex items-center border py-3 px-3 justify-between rounded-md gap-x-5">
        <input
          type="text"
          placeholder="Add Todo"
          value={label}
          className="px-2 py-1 text-brand-beige bg-brand-beige/20 rounded outline-none placeholder:text-brand-beige/40"
          onChange={handleLabelChange}
        />
        <button
          onClick={handleAddClick}
          disabled={label.length === 0}
          className="bg-brand-green text-brand-beige px-2 py-1 text-sm font-bold rounded-md disabled:opacity-40 cursor-not-allowed transition-all duration-1000"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
