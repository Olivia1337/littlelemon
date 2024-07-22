import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function SpecialsCard({ title, description, id, price, image }) {
  return (
    <div className="specials-card" id={id}>
      <img src={image} alt="Little lemon meal" width={100} />
      <div>
        <div>
          <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
          </div>
          <p>{description}</p>
        </div>
        <div className="order-button">
          <p>Order as delivery</p>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}
