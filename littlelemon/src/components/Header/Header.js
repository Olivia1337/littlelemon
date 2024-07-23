import React from "react";
import logo from "../../assets/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./Header.styles.css";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Little lemon logo" width={300} />
      </Link>

      <Nav />
    </header>
  );
}
