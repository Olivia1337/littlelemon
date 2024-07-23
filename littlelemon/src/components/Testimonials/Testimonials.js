import React from "react";
import TestimonialCard from "./TestimonialCard";
import portrait01 from "../../assets/portrait01.jpg";
import portrait02 from "../../assets/portrait02.jpg";
import portrait03 from "../../assets/portrait03.jpg";
import portrait04 from "../../assets/portrait04.jpg";
import "./Testimonials.styles.css";

export default function Testimonials() {
  return (
    <div
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-header"
    >
      <h1 id="testimonials-header">Testimonials</h1>
      <div className="testimonials-row">
        <TestimonialCard
          image={portrait01}
          name="Mike"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          stars="5"
          aria-label="Testimonial from Mike, 5 stars"
        />
        <TestimonialCard
          image={portrait02}
          name="John"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          stars="4"
          aria-label="Testimonial from John, 4 stars"
        />
        <TestimonialCard
          image={portrait03}
          name="Anna"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          stars="5"
          aria-label="Testimonial from Anna, 5 stars"
        />
        <TestimonialCard
          image={portrait04}
          name="Alice"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          stars="5"
          aria-label="Testimonial from Alice, 5 stars"
        />
      </div>
    </div>
  );
}
