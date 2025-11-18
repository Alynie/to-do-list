import React, { useState } from "react";
import {
  useToggleItemCompletion,
  useRemoveItem,
  useEditItem,
} from "../hooks/useTodoStore";
import { DeleteButton, EditButton, SaveButton } from "./buttons";

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
  const editItem = useEditItem();
  const removeItem = useRemoveItem();
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  const saveNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      editItem(id, { text: inputValue });
      setInputValue("");
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center gap-4 p-4">
      <input
        type="checkbox"
        className="flex items-center gap-2 w-4 h-4 accent-green-600 rounded-xs focus:ring-green-500 ring-offset-neutral-primary focus:ring-2"
        checked={isComplete}
        onChange={() => toggleItem(id, isComplete)}
      />
      <div className="flex-1">
        {isEditing ? (
          <form onSubmit={saveNewItem} className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Edit item"
              autoFocus
            />
            <SaveButton />
          </form>
        ) : (
          <div className="flex items-center gap-4">
            <p
              className={`flex-1 ${isComplete ? "line-through text-gray-500" : ""}`}
            >
              {text}
            </p>
            <div className="flex overflow-hidden rtl:flex-row-reverse">
              <EditButton onClick={() => setIsEditing(true)} />
              <DeleteButton onClick={() => removeItem(id)} />
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoListItem;
