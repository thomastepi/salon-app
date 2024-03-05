import React from "react";
import { Navbar, FullScreen } from "./index";
import main from "../assets/images/main.jpg";
import Wrapper from "../assets/wrappers/Home";

const Home = () => {
  return (
    <FullScreen>
      <Navbar />
      <Wrapper>
        <div className="container">
          <div className="info">
            <h1>
              Welcome to <span>Annette's Perfect</span>
            </h1>
            <p>
              We are a full-service salon offering a wide range of services for
              all your beauty needs. Our team of professionals is dedicated to
              providing you with the highest quality of service, tailored to
              your individual needs. We are committed to providing you with the
              best possible experience. We look forward to seeing you soon!
            </p>
            <button type="button" className="btn">
              Book Now
            </button>
          </div>
          <div className="logo-main">
            {<img className="" src={main} alt="main-logo" />}
          </div>
        </div>
      </Wrapper>
    </FullScreen>
  );
};

export default Home;
