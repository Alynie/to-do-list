import React, { useState } from "react";
import {
  useToggleItemCompletion,
  useRemoveItem,
  useEditItem,
} from "../hooks/useTodoStore";

export interface TodoListItemProps {
  id: string;
  text: string;
  isComplete: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  text,
  isComplete,
}) => {
  const toggleItem = useToggleItemCompletion();
  const removeItem = useRemoveItem();
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const editItem = useEditItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      editItem(id, { text: inputValue });
      setInputValue("");
      setIsEditing(false);
    }
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => toggleItem(id, isComplete)}
      />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Edit todo item"
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>{text}</p>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
};

export default TodoListItem;
