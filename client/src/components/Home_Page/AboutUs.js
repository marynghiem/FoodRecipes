import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  background-color: rgb(236, 235, 235);
  width: 300px;
  height: 400px;
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  margin-top: 25px;
`;

const AboutUsTitle = styled.h4`
  font-weight: bold;
  padding: 10px 0px 10px 0px;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const MaryPicture = styled.img`
  width: 30%;
  height: auto;
  float: left;
  padding: 10px 10px 5px 10px;
`;
const MaryInfo = styled.p`
  display: justify;
  text-align: left;
  padding: 10px;
  font-family: Georgia, serif;
  margin-top: 0px;
`;
const SpacedIcon = styled.i`
  padding-left: 15px;
  padding-right: 15px;
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>ABOUT US</AboutUsTitle>
      <MaryPicture src="marysPic.png" alt="Mary Nghiem" />
      <MaryInfo>
        Mary Nghiem recently graduated from San Jose State. She lives in California with three other siblings and her
        two dogs, Mikasa and Cappy. She enjoys Math, playing Pokemon Go and watching anime. Currently, she is working on
        pivoting into tech field by teaching herself how to code.
      </MaryInfo>
      <h5>FOLLOW ME</h5>
      <div>
        <SpacedIcon className="fa fa-facebook"></SpacedIcon>
        <SpacedIcon className="fa fa-instagram"></SpacedIcon>
        <SpacedIcon className="fa fa-twitter"></SpacedIcon>
        <SpacedIcon className="fa fa-youtube-play"></SpacedIcon>
        <SpacedIcon className="fa fa-envelope"></SpacedIcon>
      </div>
    </AboutUsContainer>
  );
};
