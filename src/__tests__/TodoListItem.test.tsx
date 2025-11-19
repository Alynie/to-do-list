import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoListItem, { TodoListItemProps } from "../components/TodoListItem";
import * as useTodoStore from "../hooks/useTodoStore";

describe("TodoListItem", () => {
  const baseProps: TodoListItemProps = {
    id: "1",
    text: "Test Task",
    isComplete: false,
  };

  it("renders task text", () => {
    render(<TodoListItem {...baseProps} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("calls toggleItem on checkbox click", () => {
    const toggle = jest.fn();
    jest.spyOn(useTodoStore, "useToggleItemCompletion").mockReturnValue(toggle);
    render(<TodoListItem {...baseProps} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(toggle).toHaveBeenCalledWith("1", false);
  });

  it("calls removeItem on delete", () => {
    const remove = jest.fn();
    jest.spyOn(useTodoStore, "useRemoveItem").mockReturnValue(remove);
    render(<TodoListItem {...baseProps} />);
    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(remove).toHaveBeenCalledWith("1");
  });

  it("enters edit mode and saves", () => {
    const edit = jest.fn();
    jest.spyOn(useTodoStore, "useEditItem").mockReturnValue(edit);
    render(<TodoListItem {...baseProps} />);
    fireEvent.click(screen.getByRole("button", { name: /edit/i }));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Task" } });
    fireEvent.submit(input.closest("form")!);
    expect(edit).toHaveBeenCalledWith("1", { text: "Updated Task" });
  });
});
