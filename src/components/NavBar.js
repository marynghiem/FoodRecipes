import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="topNav">
        <a className="active navItem" href="#home">
          HOME <i className="fa fa-caret-down"></i>
        </a>
        <a href="#breakfast" className="navItem">
          BREAKFAST <i className="fa fa-caret-down"></i>
        </a>
        <a href="#lunch" className="navItem">
          LUNCH <i className="fa fa-caret-down"></i>
        </a>
        <a href="#dinner" className="navItem">
          DINNER <i className="fa fa-caret-down"></i>
        </a>
      </div>
    </div>
  );
};
