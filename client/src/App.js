import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { FoodCarousel } from "./components/FoodCarousel";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";
import { FetchingStuff } from "./components/FetchingStuff";
import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { CalorieIntake } from "./components/Meal_Prep/CalorieIntake";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="pageWrapper">
              <Heading />
              <NavBar />
              <FoodCarousel />
              <AboutUs />
              <FetchingStuff />
            </div>
          }
        />
        <Route
          path="/calorieIntake"
          element={
            <div className="pageWrapper">
              <Heading />
              <NavBar />
              <CalorieIntake />{" "}
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
//consider using Route?
export default App;
