import React from "react";
import "../../css/Dessert/Dessert.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;

export const Dessert = () => {
  return (
    <div className="dessertContainer">
      <Container />
    </div>
  );
};
