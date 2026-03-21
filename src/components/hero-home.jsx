import React, { useState } from "react";
import "./hero-home.css";
import i1 from "../assets/i1.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  

  const images = [
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/p/w/-original-imahg5fxzmyzbkv8.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/o/v/3/-original-imahfkh32rjbqrhj.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/j/s/-original-imahk7hhynx2zpdh.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/l/z/-original-imahgfdygxgqfwym.jpeg?q=70",
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="hero">

      <div className="hero-content">
        <h1 className="hero-title">Innovative Tech Gear</h1>

        <p className="hero-desc">
          Discover a world of tech excellence with our top-of-the-line products.
          We offer custom-built rigs, high-performance components, and exclusive
          peripherals for all tech enthusiasts.
        </p>

        <button className="hero-btn" onClick={() => navigate("/product")}>
          Shop Now
        </button>
      </div>

      {/* Carousel */}
      <div className="hero-products">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {images.map((img, i) => {
              const isCenter = i === index + 1; // middle item

              return (
                <div
                  className={`product-img ${isCenter ? "active" : ""}`}
                  key={i}
                >
                  <img src={img} alt={`product-${i}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
