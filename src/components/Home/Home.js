import React from "react";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import "./Home.styles.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}
