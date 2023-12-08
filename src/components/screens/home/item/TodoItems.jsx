// В файле TodoItems.js
import React from "react";
import { Check } from "./Check";
import { PiTrashLight } from "react-icons/pi";

export const TodoItem = ({ todo, changedTodo, removeTodo }) => {
  const handleRemoveClick = (event, id) => {
    event.stopPropagation();
    removeTodo(id);
  };

  return (
    <div
      className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full justify-between"
      onClick={() => changedTodo(todo._id)}
    >
      <button className="flex items-center">
        <Check isCompleted={todo.isCompleted} />
        <span className={` ${todo.isCompleted && "line-through"}`}>
          {todo.title}
        </span>
      </button>

      <button onClick={(event) => handleRemoveClick(event, todo._id)}>
        <PiTrashLight
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};
