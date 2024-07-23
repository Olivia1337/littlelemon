import React from "react";
import image from "../../assets/meal01.jpg";
import { Link } from "react-router-dom";
import "./Hero.styles.css";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button>RESERVE A TABLE</button>
        </Link>
      </div>
      <div>
        <img src={image} alt="Little lemon meal" height={400} />
      </div>
    </div>
  );
}
