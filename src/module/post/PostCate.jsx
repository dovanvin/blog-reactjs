import React from "react";
import { NavLink } from "react-router-dom";

const PostCate = ({ children, to = "/", ...props }) => {
  return (
    <>
      <div style={{ textAlign: "center", borderRadius: "1.5rem", display: "block" }} {...props}>
        <NavLink to={to}>{children}</NavLink>
      </div>
    </>
  );
};

export default PostCate;
