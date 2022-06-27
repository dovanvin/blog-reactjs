import React from "react";
import LoadingSignUp from "../loading/LoadingSignUp";
import "./Button.scss";
import {NavLink} from 'react-router-dom';

const Button = ({ type = "", onClick = () => {}, children, ...props }) => {
  const { isLoading, to  } = props;
  const child = !!isLoading ? <LoadingSignUp></LoadingSignUp> : children;

  if ( to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <button type={type} {...props}>
          {child}
        </button>
      </NavLink>
    )
  }


  return (
    <>
      <button type={type} onClick={onClick} {...props}>
        {child}
      </button>
    </>
  );
};

export default Button;
