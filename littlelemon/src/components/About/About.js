import React from "react";
import image01 from "../../assets/owners01.jpg";
import image02 from "../../assets/owners02.jpg";
import "./About.styles.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. <br />
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div
        className="image-container"
        role="img"
        aria-label="Images of Little Lemon meals"
      >
        <img
          src={image01}
          alt="Mario and Adrian preparing a meal at Little Lemon"
          className="image01"
        />
        <img
          src={image02}
          alt="A beautifully plated dish at Little Lemon"
          className="image02"
        />
      </div>
    </div>
  );
}
