"use client";
import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  id: string;
  name: string;
}

const TodoList: React.FC<TodoListProps> = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "test", isComplete: false },
    { id: "2", text: "test2", isComplete: true },
  ]);
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
