import React from "react";
import "./PostMeta.scss";

const PostMeta = ({ date = "Mar23", authorName = "Andiez Le" }) => {
  return (
    <>
      <div className="post-info">
        <span className="time">{date}</span>
        <span className="dot"></span>
        <span className="author">{authorName}</span>
      </div>
    </>
  );
};

export default PostMeta;
