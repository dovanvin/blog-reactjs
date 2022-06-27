import React from "react";
import Button from "../../../components/button/Button";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <img
          src="https://imgs.search.brave.com/98eeHitmQLYJccPZMrhkPB64VqB0oV2WZa6PAwOUjjM/rs:fit:1200:359:1/g:ce/aHR0cHM6Ly9lZHUu/aG90ZWxqb2Iudm4v/dXBsb2Fkcy9zaGFy/ZS1pbWFnZXMvMjAy/MC8wNy8xNy8xNDc5/ODdfaTVmMTE1MTVh/ODMyNDEucG5n"
          alt=""
        />
        <Button type="button" to="/sign-up" className="btn-get-start">Get Started</Button>
      </div>
    </div>
  );
};

export default Banner;
