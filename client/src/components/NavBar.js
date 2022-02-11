import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active navItem" href="/home">
          HOME <i className="fa fa-caret-down"></i>
        </a>
        <a href="/breakfast" className="navItem">
          BREAKFAST <i className="fa fa-caret-down"></i>
        </a>
        <a href="/lunch" className="navItem">
          LUNCH <i className="fa fa-caret-down"></i>
        </a>
        <div className="navItem dropdown">
          <button className="dropbtn">
            DINNER <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/marysTopDinner">Mary's Top Dinner Choices</a>
            <a href="/dinnerByIngredient">Dinner By Ingredient</a>
          </div>
        </div>
        <a href="/desserts" className="navItem">
          DESSERTS<i className="fa fa-caret-down"></i>
        </a>
        <div className="navItem dropdown">
          <button className="dropbtn">
            MEAL PLAN <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/calorieIntake">Meal Prep By Calories</a>
          </div>
        </div>
      </div>
    </div>
  );
};
