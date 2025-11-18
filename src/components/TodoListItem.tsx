import React from "react";

interface TodoListItemProps {
  id: string;
  text: string;
  isComplete: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ text, isComplete }) => {
  return (
    <div className="item">
      <input type="checkbox" checked={isComplete} />
      <p>{text}</p>
    </div>
  );
};

export default TodoListItem;
