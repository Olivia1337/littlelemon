import React from "react";
import logo from "../../assets/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./Header.styles.css";

export default function Header() {
  return (
    <header aria-label="Site Header">
      <Link to="/" aria-label="Navigate to home page">
        <img src={logo} alt="Little Lemon logo" width={300} />
      </Link>

      <Nav />
    </header>
  );
}
