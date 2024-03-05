import React from "react";
import Wrapper from "../assets/wrappers/FullScreen";

const FullScreen = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export default FullScreen;
