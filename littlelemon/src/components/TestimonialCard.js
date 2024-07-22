import React from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ name, quote, image, stars }) {
  return (
    <div className="testimonial-card">
      <div>
        <img src={image} alt="Portrait of person giving testimonial" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{quote}</p>
      </div>
      <div>
        <h3>{stars}</h3>
        <FaStar color="#f4ce14" />
      </div>
    </div>
  );
}
