"use client";
import { useClearStore } from "@/src/hooks/useTodoStore";

const ResetButton = () => {
  const clearStore = useClearStore();
  return (
    <button
      onClick={clearStore}
      className="ml-2 px-4 py-2 bg-red-400 text-white rounded-lg"
    >
      Clear All
    </button>
  );
};
export default ResetButton;
