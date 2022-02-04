import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active" href="#home" className="navItem">
          Home <i class="fa fa-caret-down"></i>
        </a>
        <a href="#breakfast" className="navItem">
          Breakfast <i class="fa fa-caret-down"></i>
        </a>
        <a href="#lunch" className="navItem">
          Lunch <i class="fa fa-caret-down"></i>
        </a>
        <a href="#dinner" className="navItem">
          Dinner <i class="fa fa-caret-down"></i>
        </a>
      </div>
    </div>
  );
};
