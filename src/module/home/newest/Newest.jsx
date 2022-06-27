import React from "react";
import Heading from "../../../components/heading/Heading";
import PostNewestItem from "../../post/post-newest-item/PostNewestItem";
import NewestLarge from "../../post/post-newest-large/NewestLarge";
import "./Newest.scss";


const Newest = () => {
  return (
    <div className="container">
      <div className="feature">
        <Heading>Text News</Heading>
        <div className="layout">
          <NewestLarge ></NewestLarge>
          <div className="sidebar">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newest;
