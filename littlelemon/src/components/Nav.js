import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <HashLink smooth to={"#menu"}>
            Menu & Order
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#testimonials"}>
            Testimonials
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#about"}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#contact"}>
            Find us
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
