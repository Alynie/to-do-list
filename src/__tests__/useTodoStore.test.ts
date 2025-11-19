import { renderHook, act } from "@testing-library/react";
import * as useTodoStoreHooks from "../hooks/useTodoStore";
import { useTodoStore } from "../store/todo-store";

describe("useTodoStore hooks", () => {
  beforeEach(() => {
    act(() => {
      useTodoStore.getState().clearStore();
    });
  });

  it("useItems returns items", () => {
    act(() => {
      useTodoStore.getState().addItem("Test", false);
    });
    const { result } = renderHook(() => useTodoStoreHooks.useItems());
    expect(result.current).toHaveLength(1);
    expect(result.current[0].text).toBe("Test");
  });

  it("useCompletedCount returns correct count", () => {
    act(() => {
      useTodoStore.getState().addItem("A", false);
      useTodoStore.getState().addItem("B", true);
    });
    const { result } = renderHook(() => useTodoStoreHooks.useCompletedCount());
    expect(result.current).toBe(1);
  });

  it("useActiveCount returns correct count", () => {
    act(() => {
      useTodoStore.getState().addItem("A", false);
      useTodoStore.getState().addItem("B", true);
    });
    const { result } = renderHook(() => useTodoStoreHooks.useActiveCount());
    expect(result.current).toBe(1);
  });

  it("useTotalCount returns total count", () => {
    act(() => {
      useTodoStore.getState().addItem("A", false);
      useTodoStore.getState().addItem("B", true);
    });
    const { result } = renderHook(() => useTodoStoreHooks.useTotalCount());
    expect(result.current).toBe(2);
  });
});
