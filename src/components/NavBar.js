import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#breakfast">Breakfast</a>
        <a href="#lunch">Lunch</a>
        <a href="#dinner">Dinner</a>
      </div>
    </div>
  );
};
