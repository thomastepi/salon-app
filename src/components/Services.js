import React from "react";
import { FullScreen } from "./index";
import services from "../utils/serviceList";
import Service from "./Service";
import Wrapper from "../assets/wrappers/Services";

const Services = () => {
  return (
    <FullScreen>
      <Wrapper>
        <h1 className="heading">Our Services</h1>
        <div className="container">
          {services.map((service, index) => (
            <Service
              key={index}
              name={service.name}
            />
          ))}
        </div>
      </Wrapper>
    </FullScreen>
  );
};

export default Services;
