import React from "react";
import logo from "../assets/logo.png";
import Nav from "./Nav";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Little lemon logo" width={300} />
      <Nav />
    </header>
  );
}
