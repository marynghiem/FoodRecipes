import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  background-color: rgb(236, 235, 235);
  width: 290px;
  height: 490px;
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  margin-top: 25px;
  @media (max-width: 1260px) {
    display: none;
  }
`;

const AboutUsTitle = styled.h4`
  font-weight: bold;
  padding: 10px 0px 10px 0px;
  margin-bottom: 0px;
  margin-top: 15px;
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
  line-height: 1.4;
  font-size: 16px;
  padding-bottom: 15px;
`;

const SpacedIcon = styled.i`
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;
const SocialMediaLinks = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>ABOUT US</AboutUsTitle>
      <MaryPicture src="marysPic.png" alt="Mary Nghiem" />
      <MaryInfo>
        Mary Nghiem recently graduated from San Jose State. She lives in California with three other siblings and her
        two dogs, Mikasa and Cappy. She enjoys Math, playing Pokemon Go and watching anime. Currently, she is working on
        pivoting into tech field by teaching herself how to code. She has created many projects like a Pokemon
        Scribbl.io, Calculator, Secret Santa and many more.
      </MaryInfo>

      <h5>FOLLOW ME</h5>
      <div>
        <SocialMediaLinks href="https://www.facebook.com/mary.nghiem.7/">
          <SpacedIcon className="fa fa-facebook"></SpacedIcon>
        </SocialMediaLinks>
        <SocialMediaLinks href="https://www.instagram.com/marynghiem46/?hl=en">
          <SpacedIcon className="fa fa-instagram"></SpacedIcon>
        </SocialMediaLinks>
        <SocialMediaLinks href="https://twitter.com/Mary_Nghiem">
          <SpacedIcon className="fa fa-twitter"></SpacedIcon>
        </SocialMediaLinks>
        <SocialMediaLinks>
          <SpacedIcon className="fa fa-youtube-play"></SpacedIcon>
        </SocialMediaLinks>
        <SocialMediaLinks>
          <SpacedIcon className="fa fa-envelope"></SpacedIcon>
        </SocialMediaLinks>
      </div>
    </AboutUsContainer>
  );
};
