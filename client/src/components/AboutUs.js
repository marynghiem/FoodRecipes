import React from "react";
import "../css/AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <h4 className="aboutUsTitle">ABOUT US</h4>
      <img className="maryPicture" src="marysPic.png" alt="Mary Nghiem" />
      <p className="maryInfo">
        Mary Nghiem recently graduated from San Jose State. She lives in California with three other siblings and her
        two dogs, Mikasa and Cappy. She enjoys Math, playing Pokemon Go and watching anime. Currently, she is working on
        pivoting into tech field by teaching herself how to code.
      </p>
      <h5 className="followMeHeading">FOLLOW ME</h5>
      <div className="socialMediaLinks">
        <i className="fa fa-facebook space"></i>
        <i className="fa fa-instagram space"></i>
        <i className="fa fa-twitter space"></i>
        <i className="fa fa-youtube-play space"></i>
        <i className="fa fa-envelope space"></i>
      </div>
    </div>
  );
};
