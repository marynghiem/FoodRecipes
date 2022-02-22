import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active navItem" href="/home">
          HOME
        </a>
        <div className="navItem dropdown">
          <button className="dropbtn">
            BREAKFAST<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/breakfast">Breakfast</a>
            <a href="/marysTopBreakfast">Mary's Top Breakfast</a>
          </div>
        </div>
        <div className="navItem dropdown">
          <button className="dropbtn">
            DINNER <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/appetizers">Appetizers</a>
            <a href="/mainCourse">Main Course</a>
            <a href="/marysTopDinner">Mary's Top Dinner Choices</a>
            <a href="/sideDish">Side Dish</a>
          </div>
        </div>
        <div className="navItem dropdown">
          <button className="dropbtn">
            DESSERTS<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/desserts">Desserts List</a>
            <a href="/marysTopDesserts">Mary's Top Desserts</a>
          </div>
        </div>
        <div className="navItem dropdown">
          <button className="dropbtn">
            MEAL PLAN <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/calorieIntake">Meal Prep By Calories</a>
            <a href="/mealPrepByIngredient">Meal Prep By Ingredient</a>
          </div>
        </div>
      </div>
    </div>
  );
};
