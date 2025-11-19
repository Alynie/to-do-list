"use client";
import React from "react";
import { useItems } from "../hooks/useTodoStore";
import TodoListItem from "./TodoListItem";
import EmptyIcon from "./EmptyIcon";
import ResetButton from "./buttons/ResetButton";
import { TodoForm } from "./TodoForm";

interface TodoListProps {
  type: "all" | "active" | "completed";
}

const TodoList: React.FC<TodoListProps> = ({ type = "all" }) => {
  const tasks = useItems().filter((item) => {
    if (type === "completed") return item.isComplete;
    if (type === "active") return !item.isComplete;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">
        {type.charAt(0).toUpperCase() + type.slice(1)} Tasks ({tasks.length})
      </h1>
      <div className="flex mb-4">
        <TodoForm type={type} />
        <ResetButton />
      </div>
      <ul className="divide-y divide-gray-300 ">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-10 text-gray-500">
            <EmptyIcon />
            <p>No Tasks!</p>
          </div>
        ) : (
          tasks
            .sort((a, b) => Number(a.isComplete) - Number(b.isComplete))
            .map((item) => <TodoListItem key={item.id} {...item} />)
        )}
      </ul>
    </div>
  );
};

export default TodoList;
