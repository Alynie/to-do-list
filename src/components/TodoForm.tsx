"use client";
import React, { useState } from "react";
import { useAddItem } from "../hooks/useTodoStore";

export const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const addItem = useAddItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo item"
        autoFocus
      />
      <button type="submit">Add Todo Item</button>
    </form>
  );
};
