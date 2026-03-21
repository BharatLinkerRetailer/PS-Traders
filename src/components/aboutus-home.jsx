import React from "react";
import "./aboutus-home.css";

const HomeAboutUs = () => {
  return (
    <section className="about-home-section">
      
      <div className="about-home-container">

        <div className="about-home-left">
          <h2>About Us</h2>
        </div>

        <div className="about-home-right">
          <p>
            Welcome to our store—your trusted destination for CCTV installation and repair, mobile phone repairing and accessories, and laptop repair and accessories. We are committed to delivering reliable technology services and high-quality products that help individuals, families, and businesses stay connected, productive, and secure.
          </p>

          <button className="home-vision-btn">Read More</button>
        </div>

      </div>

      <div className="about-home-image">
        <img
          src="https://static.wixstatic.com/media/88aac0_42ebfb7b77fd4f1886c8f2c1ea648076~mv2.webp"
          alt="about"
        />
      </div>

    </section>
  );
};

export default HomeAboutUs;