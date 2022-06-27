import React from "react";
import PostImage from "../post-image/PostImage";
import PostMeta from "../post-meta/PostMeta";
import PostCate from "../PostCate";
import PostTitle from "../PostTitle";
import "./Feature-item.scss";

const FeatureItem = () => {
  return (
    <>
      <div className="feature-item">
        <PostImage url = "https://imgs.search.brave.com/_WIbBIuSxG_wP-LPxCjbT3c_BAG4oVwzRSJ4hp37WXY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/alBpWm9iZGFiamF1/a0VxWUU4YXJnSGFF/OCZwaWQ9QXBp"></PostImage>
        <div className="hr"></div>
        <div className="post-content">
          <div className="port-top">
            <PostCate className="post-cate">Kiến thức</PostCate>
            <PostMeta></PostMeta>
          </div>
          <PostTitle className="post-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
            aliquam!
          </PostTitle>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
