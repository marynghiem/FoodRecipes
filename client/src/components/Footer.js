import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
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
        <div className="footer-section footer-categories">
          <h5 className="footer-categories-title">Categories</h5>
          <a href="#breakfast" className="footer-categories-link">
            Breakfast{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#lunch" className="footer-categories-link">
            Lunch{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#dinner" className="footer-categories-link">
            Dinner{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#desserts" className="footer-categories-link">
            Desserts{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#maryspicks" className="footer-categories-link">
            Mary's Picks{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#snacks" className="footer-categories-link">
            Snacks{" "}
          </a>
          <div className="footer-slash">/</div>
          <a href="#drinks" className="footer-categories-link">
            Drinks{" "}
          </a>{" "}
          <div className="footer-slash">/</div>
          <a href="/calorieIntake" className="footer-categories-link">
            Meal Prep By Calories{" "}
          </a>
        </div>
        <div className="footer-section footer-tags">
          <h5 className="footer-tags-title">Tags</h5>
        </div>
        <div className="footer-section footer-contact-us">
          <h5 className="footer-contact-us-title">Contact Us</h5>
        </div>
      </div>
      <div className="footer-bottom">&copy; Mary Nghiem's Fave Eats | Designed by Mary Nghiem</div>
    </div>
  );
};
