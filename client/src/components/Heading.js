import React from "react";
import styled from "styled-components";

const FlowerBorder = styled.img`
  width: 20%;
  height: auto;
  display: inline-block;
`;
const Title = styled.h1`
  margin-bottom: 0px;
  margin-top: 10px;
`;
const TitleImage = styled.img`
  height: 50px;
  width: auto;
`;
const Description = styled.p`
  margin-top: 0px;
  font-family: Didot, serif;
  color: gray;
  font-size: 15px;
`;

export const Heading = () => {
  return (
    <div>
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <a href="/home">
        <Title>
          <TitleImage src="MarysTitle.png" alt="Marys favorite eats" />
        </Title>
      </a>
      <Description>Delicious, Favorful and Unique Food Choices Selected By Mary Nghiem</Description>
    </div>
  );
};
