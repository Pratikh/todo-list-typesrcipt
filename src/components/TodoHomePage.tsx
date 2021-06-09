import { useDispatch, useSelector } from "react-redux";
import AddNewTodoList from "./AddNewTodoList";
import { toggleTodoAction, deletTodoListAction } from "../redux/actions";
import "./component.css";

function ShowTodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((store: any) => store.todoList);

  function checkBoxOnChange(id: string) {
    dispatch(toggleTodoAction(id));
  }

  function onDeleteButtonClick(id: string) {
    dispatch(deletTodoListAction(id));
  }

  return todoList.map((list: any) => (
    <div key={list.id} className="listDiv">
      <input
        type="checkbox"
        checked={list.done}
        onChange={checkBoxOnChange.bind({}, list.id)}
      />
      <span
        style={{
          textDecoration: list.done ? "line-through" : "auto",
          overflowWrap: "anywhere",
        }}
      >
        {list.detail}
      </span>
      <div>
        <button
          className="deleteButton"
          onClick={onDeleteButtonClick.bind({}, list.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
}

function TodoHomePage() {
  return (
    <div className="todoListParent">
      <h1>Hello, welcome to your todo lists</h1>
      <AddNewTodoList />
      <ShowTodoList />
    </div>
  );
};

export default TodoHomePage;
