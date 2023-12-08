// В файле Home.js
import React, { useEffect, useState } from "react";
import { TodoItem } from "./item/TodoItems";
import { CreateTodoField } from "./create-todo-field/CreateTodoField";

const data = [
  {
    _id: "1",
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    _id: "2",

    title: "Read the next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "3",
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

export const Home = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : data;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const changedTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  // window.addTodo = addTodo; // window delaet chudesa !!!!!!!!!!!!

  return (
    <div className="h-screen text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changedTodo={changedTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};
