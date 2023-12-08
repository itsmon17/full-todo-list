import React, { useState } from "react";

export const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    if (title.trim() === "") {
      return;
    }

    setTodos((prev) => [
      {
        title: title,
        _id: new Date(),
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };
  window.addTodo = addTodo;

  console.log(title);
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20 ">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};
