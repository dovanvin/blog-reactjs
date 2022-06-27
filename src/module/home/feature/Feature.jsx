import React from "react";
import Heading from "../../../components/heading/Heading";
import FeatureItem from "../../post/feature-item/FeatureItem";
import "./Feature.scss" ;

const Feature = () => {
  return (
    <div className="container">
      <div className="feature">
        <Heading>Text News</Heading>
        <div className="grid-layout">
          <FeatureItem></FeatureItem>
          <FeatureItem></FeatureItem>
          <FeatureItem></FeatureItem>
        </div>
      </div>
    </div>
  );
};

export default Feature;
