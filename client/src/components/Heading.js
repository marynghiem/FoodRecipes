import React from "react";
import styled from "styled-components";

const FlowerBorder = styled.img`
  width: 20%;
  height: auto;
  display: inline-block;
`;
const Title = styled.h1`
  font-family: Didot, serif;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;

export const Heading = () => {
  return (
    <div>
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <FlowerBorder src="flowers.png" alt="purple flowers" />
      <Title>Mary Nghiem's Fave Eats</Title>
    </div>
  );
};
