import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import TodoFrom from "./TodoFrom";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoFrom edit={edit} onSubmit={submitUpdate}></TodoFrom>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} className="title" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiDeleteBin5Line
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        ></RiDeleteBin5Line>
        <FiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        ></FiEdit>
      </div>
    </div>
  ));
};

export default Todo;
