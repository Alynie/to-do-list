import { useTodoStore as useStore } from "../store/todo-store";

export const useItems = () => useStore((state) => state.items);
export const useAddItem = () => useStore((state) => state.addItem);
export const useEditItem = () => useStore((state) => state.editItem);
export const useToggleItemCompletion = () =>
  useStore((state) => state.toggleItemCompletion);
export const useRemoveItem = () => useStore((state) => state.removeItem);
export const useClearStore = () => useStore((state) => state.clearStore);

export const useCompletedCount = () =>
  useStore((state) => state.items.filter((item) => item.isComplete).length);
export const useActiveCount = () =>
  useStore((state) => state.items.filter((item) => !item.isComplete).length);
export const useTotalCount = () => useStore((state) => state.items.length);
