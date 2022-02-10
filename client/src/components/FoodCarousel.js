import React from "react";
import "../css/FoodCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const FoodCarousel = () => {
  return (
    <div className="carouselContainer">
      <Carousel showThumbs={false}>
        <div>
          <img src="blueberries.png" alt="bowl of blueberries" />
        </div>
        <div>
          <img src="fruits.jpeg" alt="bowl of fruits"></img>
        </div>
      </Carousel>
    </div>
  );
};
