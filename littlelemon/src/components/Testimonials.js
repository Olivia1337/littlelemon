import React from "react";
import TestimonialCard from "./TestimonialCard";
import portrait01 from "../assets/portrait01.jpg";
import portrait02 from "../assets/portrait02.jpg";
import portrait03 from "../assets/portrait03.jpg";
import portrait04 from "../assets/portrait04.jpg";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-row">
        <TestimonialCard
          image={portrait01}
          name={"Mike"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          stars={"5"}
        />
        <TestimonialCard
          image={portrait02}
          name={"John"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          stars={"4"}
        />
        <TestimonialCard
          image={portrait03}
          name={"Anna"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          stars={"5"}
        />
        <TestimonialCard
          image={portrait04}
          name={"Alice"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          stars={"5"}
        />
      </div>
    </div>
  );
}
