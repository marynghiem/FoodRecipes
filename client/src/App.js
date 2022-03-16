import "./App.css";
import { FoodCarousel } from "./components/FoodCarousel";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CalorieIntake } from "./components/Meal_Prep/CalorieIntake";
import { MarysTopDinner } from "./components/Dinner/MarysTopDinner";
import { MealPrepByIngredient } from "./components/Meal_Prep/MealPrepByIngredient";
import { Breakfast } from "./components/Breakfast/Breakfast";
import { MarysTopBreakfast } from "./components/Breakfast/MarysTopBreakfast";
import { Appetizers } from "./components/Dinner/Appetizers";
import { MainCourse } from "./components/Dinner/MainCourse";
import { SideDish } from "./components/Dinner/SideDish";
import { Dessert } from "./components/Dessert/Dessert";
import { MarysTopDessert } from "./components/Dessert/MarysTopDessert";
import { MealRecipeByID } from "./components/MealRecipeByID";
import { HomePage } from "./components/Home_Page";

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
                <HomePage />
              </>
            }
          />
          <Route
            path="/breakfast"
            element={
              <>
                <Breakfast />
              </>
            }
          />
          <Route path="/marysTopBreakfast" element={<MarysTopBreakfast />} />

          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/mainCourse" element={<MainCourse />} />
          <Route path="/marysTopDinner" element={<MarysTopDinner />} />
          <Route path="/sideDish" element={<SideDish />} />
          <Route path="/marysTopDesserts" element={<MarysTopDessert />} />
          <Route path="/desserts" element={<Dessert />} />
          <Route
            path="/calorieIntake"
            element={
              <>
                <CalorieIntake />
              </>
            }
          />
          <Route path="/mealPrepByIngredient" element={<MealPrepByIngredient />} />
          <Route path="/mealRecipeByID" element={<MealRecipeByID />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
