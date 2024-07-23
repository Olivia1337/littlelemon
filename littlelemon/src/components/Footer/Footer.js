import React from "react";
import image from "../../assets/restaurant.jpg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "./Footer.styles.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <img src={image} alt="Restaurant layout" width={300} />
      <div className="footer-nav" aria-labelledby="footer-navigation">
        <strong id="footer-navigation">Little Lemon</strong>

        <HashLink smooth to={"/#home"} aria-label="Navigate to home section">
          Home
        </HashLink>
        <HashLink smooth to={"/#about"} aria-label="Navigate to about section">
          About
        </HashLink>
        <HashLink
          smooth
          to={"/#menu"}
          aria-label="Navigate to menu and order section"
        >
          Menu & Order
        </HashLink>
        <HashLink
          smooth
          to={"/#testimonials"}
          aria-label="Navigate to testimonials section"
        >
          Testimonials
        </HashLink>
        <HashLink smooth to={"/#about"} aria-label="Navigate to about section">
          About
        </HashLink>
      </div>
      <div className="contact-info" aria-labelledby="footer-contact">
        <strong id="footer-contact">Contact</strong>

        <a href="#address" aria-label="Our address">
          Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois 60602 USA
        </a>
        <a href="#phone" aria-label="Our phone number">
          (311) 555-2368
        </a>
        <a href="#email" aria-label="Our email">
          littlemon@bookings.com
        </a>
      </div>
      <div className="social-media" aria-labelledby="footer-social-media">
        <strong id="footer-social-media">Social Media</strong>
        <a href="#facebook" aria-label="Visit our Facebook page">
          <FaFacebookSquare color="white" size={30} />
        </a>
        <a href="#instagram" aria-label="Visit our Instagram profile">
          <FaInstagram color="white" size={30} />
        </a>
        <a href="#twitter" aria-label="Visit our Twitter profile">
          <FaTwitter color="white" size={30} />
        </a>
      </div>
    </footer>
  );
}
