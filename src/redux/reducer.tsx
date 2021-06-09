import { uniqueId } from "lodash";
import { createStore } from "redux";

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

// Initial state of store
const initialState = {
  todoList: [
    {
      id: uniqueId(),
      done: false,
      detail: "Do home work",
    },
    {
      id: uniqueId(),
      done: true,
      detail: "Learn typescript",
    },
  ],
};

// Helper functions
function toggleTodo(todo: any, id: number) {
  const copyData = [...todo];
  copyData.forEach((list) => {
    if (list.id === id) {
      list.done = !list.done;
    }
  });
  return copyData;
}

interface NewTodo {
  id: string;
  done: boolean;
  detail: string;
}

function addTodoList(lists: any, newTodo: NewTodo) {
  const isThereSameDataPresent = lists.some(
    // is same detail present in list
    ({ detail }: { detail: string }) => detail === newTodo.detail
  );

  let data = [...lists];
  if (!isThereSameDataPresent) {
    data = [...lists, newTodo];
  }

  return data;
}

// Reducer
function todoReducer(
  state = initialState,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: addTodoList(state.todoList, payload),
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          ({ id }: { id: string }) => id !== payload
        ),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: toggleTodo(state.todoList, payload),
      };

    default:
      return state;
  }
}

// Store
export default createStore(todoReducer);
