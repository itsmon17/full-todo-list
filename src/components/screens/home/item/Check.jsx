import React from "react";
import { FaCheck } from "react-icons/fa";

export const Check = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 rounded-lg border-pink-400 ${
        isCompleted ? "bg-pink-400" : ""
      } w-5 h-5 mr-3 flex justify-center items-center`}
    >
      {isCompleted && <FaCheck size={24} className="text-gray-900" />}
    </div>
  );
};
