import React from "react";
import image from "../../assets/restaurant.jpg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "./Footer.styles.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <img src={image} alt="Restaurant layout" width={300} />
      <div className="footer-nav">
        <strong>Little Lemon</strong>

        <HashLink smooth to={"/#home"}>
          Home
        </HashLink>
        <HashLink smooth to={"/#about"}>
          About
        </HashLink>
        <HashLink smooth to={"/#menu"}>
          Menu & Order
        </HashLink>
        <HashLink smooth to={"/#testimonials"}>
          Testimonials
        </HashLink>
        <HashLink smooth to={"/#about"}>
          About
        </HashLink>
      </div>
      <div className="contact-info">
        <strong>Contact</strong>

        <a href="#address">
          Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois 60602 USA
        </a>
        <a href="#phone">(311) 555-2368</a>
        <a href="#email">littlemon@bookings.com</a>
      </div>
      <div className="social-media">
        <strong>Social Media</strong>
        <a href="#facebook">
          <FaFacebookSquare color="white" size={30} />
        </a>
        <a href="#instagram">
          <FaInstagram color="white" size={30} />
        </a>
        <a href="#twitter">
          <FaTwitter color="white" size={30} />
        </a>
      </div>
    </footer>
  );
}
