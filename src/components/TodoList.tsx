"use client";
import React from "react";
import { useItems } from "../hooks/useTodoStore";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  id: string;
  name: string;
}

const TodoList: React.FC<TodoListProps> = () => {
  const tasks = useItems();

  if (tasks.length === 0) {
    return (
      <div className="emptyState">
        <p>Empty List</p>
      </div>
    );
  }

  return (
    <div className="list">
      {tasks.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          isComplete={item.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
