import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TodoListItemProps } from "../components/TodoListItem";

export interface TodoStore {
  items: TodoListItemProps[];
  addItem: (text: string) => void;
  editItem: (id: string, updatedItem: Partial<TodoListItemProps>) => void;
  toggleItemCompletion: (id: string, isComplete: boolean) => void;
  removeItem: (id: string) => void;
  clearStore: () => void;
}

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        addItem: (text: string) => {
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
          if (!updatedItem.text) return;

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
        clearStore: () => {
          set({ items: [] });
          useTodoStore.persist.clearStorage();
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
