"use client";
import React, { useState } from "react";
import { useAddItem } from "../hooks/useTodoStore";
import { AddButton } from "./buttons";

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
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        className="flex-1 p-2 border rounded"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new item"
        autoFocus
      />
      <AddButton />
    </form>
  );
};
