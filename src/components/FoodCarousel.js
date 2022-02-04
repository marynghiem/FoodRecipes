import React from "react";
import "../css/FoodCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const FoodCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="fruits.jpeg" alt="bowl of fruits"></img>
        </div>
        <div>
          <img src="blueberries.png" alt="bowl of blueberries" />
        </div>
      </Carousel>
      ;
    </div>
  );
};
