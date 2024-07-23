import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Specials.styles.css";

export default function SpecialsCard({ title, description, id, price, image }) {
  return (
    <div
      className="specials-card"
      id={id}
      aria-label={`Specials card for ${title}, priced at ${price}`}
    >
      <img src={image} alt={`Image of ${title}`} width={100} />
      <div>
        <div>
          <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
          </div>
          <p>{description}</p>
        </div>
        <div className="order-button">
          <p>
            <strong>Order a delivery</strong>
          </p>
          <FaShoppingCart aria-label="Shopping cart icon" />
        </div>
      </div>
    </div>
  );
}
