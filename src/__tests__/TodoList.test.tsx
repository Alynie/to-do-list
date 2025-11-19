import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import * as useTodoStore from "../hooks/useTodoStore";
import "@testing-library/jest-dom";

describe("TodoList", () => {
  it("renders empty state when no tasks", () => {
    jest.spyOn(useTodoStore, "useItems").mockReturnValue([]);
    render(<TodoList type="all" />);
    expect(screen.getByText(/No Tasks!/i)).toBeInTheDocument();
  });

  it("renders active tasks only", () => {
    jest.spyOn(useTodoStore, "useItems").mockReturnValue([
      { id: "1", text: "Active", isComplete: false },
      { id: "2", text: "Done", isComplete: true },
    ]);
    render(<TodoList type="active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.queryByText("Done")).not.toBeInTheDocument();
  });

  it("renders completed tasks only", () => {
    jest.spyOn(useTodoStore, "useItems").mockReturnValue([
      { id: "1", text: "Active", isComplete: false },
      { id: "2", text: "Done", isComplete: true },
    ]);
    render(<TodoList type="completed" />);
    expect(screen.getByText("Done")).toBeInTheDocument();
    expect(screen.queryByText("Active")).not.toBeInTheDocument();
  });
});
