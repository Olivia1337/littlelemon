import React from "react";
import SpecialsCard from "./SpecialsCard";
import image01 from "../../assets/meal04.jpg";
import image02 from "../../assets/meal02.jpg";
import image03 from "../../assets/meal03.jpg";
import "./Specials.styles.css";

export default function Specials() {
  return (
    <div className="specials" id="menu">
      <div>
        <h1 className="title">Specials</h1>
        <button>OPEN MENU</button>
      </div>
      <div>
        <SpecialsCard
          image={image02}
          title={"Greek Salad"}
          price={"$12.99"}
          description={
            "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          }
        />
        <SpecialsCard
          image={image03}
          id="middle-card"
          title={"Bruschetta"}
          price={"$5.99"}
          description={
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive."
          }
        />
        <SpecialsCard
          image={image01}
          title={"Lemon Dessert"}
          price={"$5.00"}
          description={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
        />
      </div>
    </div>
  );
}
