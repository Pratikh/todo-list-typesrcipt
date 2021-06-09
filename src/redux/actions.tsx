import { uniqueId } from "lodash";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

function addNewTodoListAction(detail: string) {
  return {
    type: ADD_TODO,
    payload: {
      id: uniqueId(),
      done: false,
      detail,
    },
  };
}

function toggleTodoAction(payload: string) {
  return {
    type: TOGGLE_TODO,
    payload,
  };
}

function deletTodoListAction(payload: string) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export { addNewTodoListAction, toggleTodoAction, deletTodoListAction };
