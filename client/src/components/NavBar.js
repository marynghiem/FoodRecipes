import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active navItem" href="#home">
          HOME <i className="fa fa-caret-down"></i>
        </a>
        <a href="/breakfast" className="navItem">
          BREAKFAST <i className="fa fa-caret-down"></i>
        </a>
        <a href="/lunch" className="navItem">
          LUNCH <i className="fa fa-caret-down"></i>
        </a>
        <a href="/dinner" className="navItem">
          DINNER <i className="fa fa-caret-down"></i>
        </a>
        <div class="navItem dropdown">
          <button class="dropbtn">
            MEAL PLAN <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/calorieIntake">Meal Prep By Calories</a>
          </div>
        </div>
      </div>
    </div>
  );
};
