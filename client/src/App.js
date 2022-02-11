import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { FoodCarousel } from "./components/FoodCarousel";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";
import { FetchingStuff } from "./components/FetchingStuff";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CalorieIntake } from "./components/Meal_Prep/CalorieIntake";
import { MarysTopDinner } from "./components/Dinner/MarysTopDinner";

function App() {
  return (
    <div className="App">
      <div className="pageWrapper">
        <Heading />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FoodCarousel />
                <AboutUs />
                <FetchingStuff />
              </>
            }
          />
          <Route
            path="/calorieIntake"
            element={
              <>
                <CalorieIntake />
              </>
            }
          />
          <Route path="/desserts" element={<></>} />
          <Route
            path="/marysTopDinner"
            element={
              <>
                <MarysTopDinner />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
