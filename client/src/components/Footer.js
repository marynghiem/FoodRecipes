import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about"></div>
        <div className="footer-section categories"></div>
        <div className="footer-section tags"></div>
        <div className="footer-section subscribe"></div>
      </div>
      <div className="footer-bottom">&copy; Mary Nghiem's Fave Eats | Designed by Mary Nghiem</div>
    </div>
  );
};
