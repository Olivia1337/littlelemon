import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Header.styles.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <HashLink smooth to={"/#menu"}>
            MENU & ORDER
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#testimonials"}>
            TESTIMONIALS
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#about"}>
            ABOUT
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#contact"}>
            FIND US
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
