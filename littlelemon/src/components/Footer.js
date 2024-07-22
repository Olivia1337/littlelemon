import React from "react";
import image from "../assets/restaurant.jpg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <img src={image} alt="Restaurant layout" width={300} />
      <div className="footer-nav">
        <a>
          <strong>Little Lemon</strong>
        </a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order-online">Order Online</a>
      </div>
      <div className="contact-info">
        <a>
          <strong>Contact</strong>
        </a>
        <a href="#address">Address</a>
        <a href="#phone">Phone number</a>
        <a href="#email">Email</a>
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
