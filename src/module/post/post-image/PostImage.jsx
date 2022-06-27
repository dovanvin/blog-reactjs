import React from "react";
import "./PostImage.scss";

const PostImage = ({
  className = "post-image",
  url = "",
  alt = "",
}) => {
  return (
    <div className={className}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
};

export default PostImage;
