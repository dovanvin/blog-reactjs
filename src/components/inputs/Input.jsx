import React from "react";
import { useController } from "react-hook-form";
import "./Input.scss";

const Input = ({name = "", type = "text", control, children, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="box-input" >
      <input
        type={type}
        id={name}
        {...field}
        {...props}
        className="input"
        
      />
      {children}
    </div>
  );
};

export default Input;
