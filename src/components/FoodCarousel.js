import React from "react";
import "../css/FoodCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const FoodCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="fruit-weight-loss.jpeg" alt="bowl of fruits"></img>
        </div>
      </Carousel>
      ;
    </div>
  );
};
