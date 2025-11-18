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
    <li className="flex items-center gap-4 p-4">
      <input
        type="checkbox"
        className="flex items-center gap-2 w-4 h-4 accent-green-600 rounded-xs focus:ring-green-500 ring-offset-neutral-primary focus:ring-2"
        checked={isComplete}
        onChange={() => toggleItem(id, isComplete)}
      />
      <div className="flex-1">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Edit item"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 transition-colors duration-200 sm:px-6 stroke-gray-700 hover:stroke-green-500"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-4">
            <p
              className={`flex-1 ${isComplete ? "line-through text-gray-500" : ""}`}
            >
              {text}
            </p>
            <div className="flex overflow-hidden rtl:flex-row-reverse">
              <button
                className="px-4 py-2 transition-colors duration-200 sm:px-6 stroke-gray-700 hover:stroke-yellow-500"
                onClick={() => setIsEditing(true)}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="px-4 py-2 transition-colors duration-200 sm:px-6 stroke-gray-700 hover:stroke-red-500"
                onClick={() => removeItem(id)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 11V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoListItem;
