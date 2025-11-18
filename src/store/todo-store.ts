import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TodoListItemProps } from "../components/TodoListItem";

export interface TodoStore {
  items: TodoListItemProps[];
  addItem: (text: string) => void;
  editItem: (id: string, updatedItem: Partial<TodoListItemProps>) => void;
  toggleItemCompletion: (id: string, isComplete: boolean) => void;
  removeItem: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem: (text: string) => {
          if (text.trim().length < 3 || text.trim().length > 100) return;

          const newTodo: TodoListItemProps = {
            id: crypto.randomUUID(),
            text: text.trim(),
            isComplete: false,
          };

          set(
            (state) => ({
              items: [...state.items, newTodo],
            }),
            false,
            "addItem",
          );
        },
        editItem: (id: string, updatedItem: Partial<TodoListItemProps>) => {
          if (
            !updatedItem.text ||
            (updatedItem.text &&
              (updatedItem.text.trim().length < 3 ||
                updatedItem.text.trim().length > 100))
          )
            return;

          const newTodo: TodoListItemProps = {
            id: id,
            text: updatedItem.text.trim(),
            isComplete: updatedItem.isComplete ?? false,
          };

          set(
            (state) => ({
              items: [...state.items.filter((todo) => todo.id !== id), newTodo],
            }),
            false,
            "editItem",
          );
        },
        toggleItemCompletion: (id: string) => {
          set(
            (state) => ({
              items: state.items.map((todo) =>
                todo.id === id
                  ? { ...todo, isComplete: !todo.isComplete }
                  : todo,
              ),
            }),
            false,
            "toggleItemCompletion",
          );
        },
        removeItem: (id: string) => {
          set(
            (state) => ({
              items: state.items.filter((todo) => todo.id !== id),
            }),
            false,
            "removeItem",
          );
        },
      }),
      {
        name: "todo-storage",
      },
    ),
    {
      name: "todo-store",
    },
  ),
);
