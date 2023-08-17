import { useState } from "react";

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleLabelEdit = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo);

  const handleEditClick = () => setEditing(!editing);

  return (
    <div className="py-4 px-8 w-full sm:max-w-xl">
      <div className="flex items-center justify-between p-4 border rounded-md space-x-6">
        <label className="flex items-center space-x-4">
          <div>
            <input
              type="checkbox"
              id="checkbox"
              checked={todo.completed}
              onChange={handleCheckboxClick}
              className="cursor-pointer"
            />
            <span />
          </div>
          {editing ? (
            <input
              className="text-brand-beige bg-transparent border-b border-brand-beige outline-none px-2"
              type="text"
              value={todo.label}
              onChange={handleLabelEdit}
            />
          ) : (
            <span
              className={`${
                todo.completed && "line-through text-brand-beige/40"
              }`}
            >
              {todo.label}
            </span>
          )}
        </label>
        <div className="flex items-center gap-x-5">
          <button
            onClick={handleEditClick}
            className="text-brand-yellow underline"
          >
            {editing ? "Save" : "Edit"}
          </button>
          <button className="text-brand-red underline" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}
