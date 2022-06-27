import React from "react";
import { NavLink } from "react-router-dom";
import "./NoPage.scss";

const NoPage = () => {
  return (
    <div className="no-page">
      
        <div>404 !</div>
        <NavLink to={"/"}>Quay Lại</NavLink>
      
    </div>
  );
};

export default NoPage;
