import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const CarouselContainer = styled.div`
  max-width: 600px;
  display: inline-block;
  margin-top: 25px;
`;

export const FoodCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel showThumbs={false}>
        <div>
          <img src="blueberries.png" alt="bowl of blueberries" />
        </div>
        <div>
          <img src="fruits.jpeg" alt="bowl of fruits"></img>
        </div>
      </Carousel>
    </CarouselContainer>
  );
};
