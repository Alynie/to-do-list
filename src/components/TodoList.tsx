"use client";
import React from "react";
import { useItems } from "../hooks/useTodoStore";
import TodoListItem from "./TodoListItem";
import EmptyIcon from "./EmptyIcon";

const TodoList: React.FC = () => {
  const tasks = useItems();

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-gray-500">
        <EmptyIcon />
        <p>No Tasks!</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-300 ">
      {tasks
        .sort((a, b) => Number(a.isComplete) - Number(b.isComplete))
        .map((item) => (
          <TodoListItem key={item.id} {...item} />
        ))}
    </ul>
  );
};

export default TodoList;
