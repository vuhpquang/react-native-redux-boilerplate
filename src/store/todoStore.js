import create from "zustand";
import produce from "immer";
import { v4 as uuidv4 } from 'uuid';
import { getFromObject, saveObject } from "src/utils/asyncStorage";
import pipe from "ramda/es/pipe";
import { logMiddleware, persistMiddleware } from "./middleware";

const createStore = pipe(logMiddleware, persistMiddleware, create);

export const useStore = createStore((set) => ({
  todoList: [],
  getTodoList: async () => {
    const res = await getFromObject("@todoList") || [];
    set({ todoList: res, });
    set(produce((draft) => {
      draft.todoList = res;
    }));
  },
  addTodo: (payload) =>
    set(produce((draft) => {
      draft.todoList.push({
        id: uuidv4(),
        name: payload,
        isDone: false,
        date: new Date(),
      });
    })),
  setDoneTodo: (payload) =>
    set(produce((draft) => {
      const todoIndex = draft.todoList.findIndex((el) => el.id === payload);
      draft.todoList[todoIndex].isDone = !draft.todoList[todoIndex].isDone;
    })),
  setNameTodo: ({ id, name }) =>
    set(produce((draft) => {
      const todoIndex = draft.todoList.findIndex((el) => el.id === id);
      draft.todoList[todoIndex].name = name;
    })),
  removeTodo: (payload) =>
    set(produce((draft) => {
      const todoIndex = draft.todoList.findIndex((el) => el.id === payload);
      draft.todoList.splice(todoIndex, 1);
    })),
  saveTodo: () =>
    set(produce((draft) => {
      saveObject("@todoList", draft.todoList);
    })),
  // More mutations will go here
}));