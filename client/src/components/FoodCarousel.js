import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 73vw;
  display: inline-block;
  margin-top: 25px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FoodCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel showThumbs={false} dynamicHeight={true}>
        <a href="/mealPrepByIngredient">
          <div>
            <img src="frontfoodpic1.png" alt="appetizers"></img>
          </div>
        </a>
      </Carousel>
    </CarouselContainer>
  );
};
