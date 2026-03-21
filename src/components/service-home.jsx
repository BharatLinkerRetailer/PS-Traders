import React from "react";
import "./service-home.css";

const Services = () => {
  return (
    <section className="home-services">

      <h2 className="home-services-title">Our Services</h2>

      <div className="home-services-container">

        <div className="home-service">
          <hr />
          <h3>CCTV Installation & Repair</h3><hr />
        </div>

        <div className="home-service">
          <hr />
          <h3>Mobile Repairing</h3><hr />
        </div>

        <div className="home-service">
          <hr />
          <h3>Mobile & Laptop Accessories</h3><hr />
        </div>

        <div className="home-service">
          <hr />
          <h3>Laptop Repairing</h3><hr />
        </div>

      </div>

    </section>
  );
};

export default Services;