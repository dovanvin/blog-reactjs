import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import {BiSearch} from "react-icons/bi";
import {GrUpdate} from "react-icons/gr";

const TodoFrom = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="update your blog ?"
            name="text"
            value={input}
            className="todo-update"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button className="todo-button"> <GrUpdate></GrUpdate> </Button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="add your blog ?"
            name="text"
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button className="todo-button"> <BiSearch></BiSearch> </Button>
        </>
      )}
    </form>
  );
};

export default TodoFrom;
