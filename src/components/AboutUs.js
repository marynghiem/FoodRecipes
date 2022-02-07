import React from "react";
import "../css/AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <h5 className="aboutUsTitle">ABOUT US</h5>
      <img className="maryPicture" src="marysPic.png" alt="Mary Nghiem" />
      <p className="maryInfo">
        Mary Nghiem recently graduated from San Jose State. She lives in California with three other siblings and her
        two dogs, Mikasa and Cappy. She enjoys Math, playing Pokemon Go and watching anime. Currently, she is working on
        pivoting into tech field by teaching herself how to code.
      </p>
      <h5 className="followMeHeading">FOLLOW ME</h5>
      <div className="socialMediaLinks">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </div>
    </div>
  );
};
