import React from "react";
import Wrapper from "../assets/wrappers/Service";

const Service = ({ name }) => {
  return (
    <Wrapper>
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="btn">
        <button type="button">
          <span>Details</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default Service;
