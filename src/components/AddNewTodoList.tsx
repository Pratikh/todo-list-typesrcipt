import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewTodoListAction } from "../redux/actions";
import "./component.css";

function AddNewTodoList() {
  const dispact = useDispatch();
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(document.createElement("input"));

  useEffect(() => {
    // On mount get focus on input.
    inputRef.current.focus();
  }, []);

  function onInputeChange({
    target: { value },
  }: {
    target: { value: string };
  }) {
    setNewTask(value);
  }

  function onSubmit(event: any) {
    event.preventDefault();
    if (newTask.length) {      
      // if there is string inputted then only dispatch
      dispact(addNewTodoListAction(newTask));
      setNewTask(""); // reset value
    }
  }

  return (
    <form className="taskForm" onSubmit={onSubmit}>
      <input
        className="formInput"
        ref={inputRef}
        placeholder="Add new todo list..."
        onChange={onInputeChange}
        value={newTask}
      />
    </form>
  );
}

export default AddNewTodoList;
