import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Header.styles.css";

export default function Nav() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li>
          <Link to="/" aria-label="Navigate to home page">
            HOME
          </Link>
        </li>
        <li>
          <HashLink
            smooth
            to="/#menu"
            aria-label="Navigate to menu and order section"
          >
            MENU & ORDER
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#testimonials"
            aria-label="Navigate to testimonials section"
          >
            TESTIMONIALS
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" aria-label="Navigate to about section">
            ABOUT
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            aria-label="Navigate to find us section"
          >
            FIND US
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
