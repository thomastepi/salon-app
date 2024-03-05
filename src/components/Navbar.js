import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/logo.png";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Wrapper>
      {<img className="logo" src={logo} alt="logo-img" />}
      <div className="login">
        <FaRegUser />
        <p>Sign in</p>
      </div>
    </Wrapper>
  );
};

export default Navbar;
