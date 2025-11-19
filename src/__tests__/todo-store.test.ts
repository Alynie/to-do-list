import { act } from "@testing-library/react";
import { useTodoStore } from "../store/todo-store";

describe("todo-store", () => {
  beforeEach(() => {
    act(() => {
      useTodoStore.getState().clearStore();
    });
  });

  it("adds a todo item", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
    });
    const items = useTodoStore.getState().items;
    expect(items).toHaveLength(1);
    expect(items[0].text).toBe("Test");
    expect(items[0].isComplete).toBe(false);
  });

  it("edits a todo item", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
      const id = useTodoStore.getState().items[0].id;
      useTodoStore.getState().editItem(id, { text: "Updated" });
    });
    const items = useTodoStore.getState().items;
    expect(items[0].text).toBe("Updated");
  });

  it("toggles completion", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
      const id = useTodoStore.getState().items[0].id;
      useTodoStore.getState().toggleItemCompletion(id, false);
    });
    const items = useTodoStore.getState().items;
    expect(items[0].isComplete).toBe(true);
  });

  it("removes a todo item", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
      const id = useTodoStore.getState().items[0].id;
      useTodoStore.getState().removeItem(id);
    });
    const items = useTodoStore.getState().items;
    expect(items).toHaveLength(0);
  });

  it("clears the store", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
      useTodoStore.getState().clearStore();
    });
    expect(useTodoStore.getState().items).toHaveLength(0);
  });
});
