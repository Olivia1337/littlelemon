import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.styles.css";

export default function TestimonialCard({ name, quote, image, stars }) {
  return (
    <div
      className="testimonial-card"
      aria-label={`Testimonial from ${name}, ${stars} stars`}
    >
      <div>
        <img src={image} alt={`Portrait of ${name}`} />
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
