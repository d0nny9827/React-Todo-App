import { useState } from "react";
import Todo from "./components/Todo";
import TodoComposer from "./components/TodoComposer";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "Learn React",
      completed: true,
    },
    {
      id: 2,
      label: "Learn React-Router-Dom",
      completed: true,
    },
    {
      id: 3,
      label: "Learn React Query",
      completed: false,
    },
    {
      id: 4,
      label: "Learn TypeScript & Redux",
      completed: true,
    },
    {
      id: 5,
      label: "Create 5 Awesome Projects",
      completed: false,
    },
  ]);

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((currentTodo) =>
      currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (todo) => {
    const updatedTodos = todos.filter(
      (currentTodo) => currentTodo.id !== todo.id
    );

    setTodos(updatedTodos);
  };

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="bg-brand-charcoal min-h-screen">
      <div className=" text-brand-beige">
        <ul className="flex flex-col items-center justify-center">
          <h1 className="pt-20 pb-6 text-4xl md:text-6xl font-extrabold">
            To-Do App
          </h1>
          <TodoComposer handleAddTodo={handleAddTodo} />
          {todos.length === 0 ? <p className="font-bold text-4xl">Let Add Some Todo's!!!</p> : todos.map((todo) => (
            <Todo
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
        <p className="text-xs text-center py-4">Created with ❤️ by Donovan Lopez</p>
      </div>
    </div>
  );
}
