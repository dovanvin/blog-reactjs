import React from "react";
import { NavLink } from "react-router-dom";

const PostTitle = ({ children, to = "/", ...props }) => {
  return (
    <h3
      style={{ fontWeight: "500", lineHeight: "1.5", display: "block" }}
      {...props}
    >
      <NavLink to={to}>{children}</NavLink>
    </h3>
  );
};

export default PostTitle;
