import ResetButton from "../components/buttons/ResetButton";
import { TodoForm } from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">All Tasks</h1>
      <div className="flex mb-4">
        <TodoForm />
        <ResetButton />
      </div>
      <TodoList />
    </div>
  );
}
