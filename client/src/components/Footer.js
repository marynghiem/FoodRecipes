import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h5 className="footer-about-title">About Mary Nghiem's Fave Eats</h5>
          <p className="footer-about-paragraph">
            Mary Nghiem's Fave Eats is a website that is designed to help people who don't usually cook. This website
            helps users find easy recipes for Breakfast, Lunch and Dinner.
          </p>

          <p className="footer-about-paragraph">
            Along with providing easy recipes to follow, Mary Nghiem's Fave Eats also provides the user with information
            regarding the ingredients and the cost of those ingredients.
          </p>
          <i className="fa fa-facebook space"></i>
          <i className="fa fa-instagram space"></i>
          <i className="fa fa-twitter space"></i>
          <i className="fa fa-youtube-play space"></i>
          <i className="fa fa-envelope space"></i>
        </div>
        <div className="footer-section categories">
          <h5 className="footer-categories-title">Categories</h5>
          <a href="#breakfast" className="footer-categories-link">
            Breakfast
          </a>
          <a href="#lunch" className="footer-categories-link">
            Lunch
          </a>
          <a href="#dinner" className="footer-categories-link">
            Dinner
          </a>
          <a href="#desserts" className="footer-categories-link">
            Desserts
          </a>
          <a href="#maryspicks" className="footer-categories-link">
            Mary's Picks
          </a>
          <a href="#snacks" className="footer-categories-link">
            Snacks
          </a>
          <a href="#drinks" className="footer-categories-link">
            Drinks
          </a>
        </div>
        <div className="footer-section tags"></div>
        <div className="footer-section subscribe"></div>
      </div>
      <div className="footer-bottom">&copy; Mary Nghiem's Fave Eats | Designed by Mary Nghiem</div>
    </div>
  );
};
