import React from "react";
import styled from "styled-components";

const MarysTopDinnerContainer = styled.div`
  background-image: url("marysFavoriteDinnerBackground.jpeg");
  height: 130vh;
`;

const MarysTopDinnerTitle = styled.h3`
  margin-top: 0px;
`;

const WhiteBoxContainerForTopDinner = styled.div`
  width: 700px;
  height: 700px;
  background-color: #fefefe;
  position: relative;
  margin: 80px auto;
  margin-bottom: 80px;
`;

export const MarysTopDinner = () => {
  return (
    <MarysTopDinnerContainer>
      <MarysTopDinnerTitle>Mary's Top Dinner Choices</MarysTopDinnerTitle>
      <WhiteBoxContainerForTopDinner></WhiteBoxContainerForTopDinner>
    </MarysTopDinnerContainer>
  );
};
