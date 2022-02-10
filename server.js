require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", async (req, res) => {
  // Make a request to spoonacular
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`).then(
    (response) => response.json()
  );

  // Return the data back to the frontend
  res.send(data);
});

app.get("/mealplan_calories", async (req, res) => {
  const calories = req.query.calories;
  console.log(calories);
  // Make a request to spoonacular
  const data = await fetch(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${calories}`
  ).then((response) => response.json());
  console.log(data);
  // Return the data back to the frontend
  res.send(data);
});

app.get("/mealplan_recipes", async (req, res) => {
  const mealID = req.query.meal_id;
  console.log(mealID);
  // Make a request to spoonacular
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${mealID}/information?apiKey=${process.env.API_KEY}&includeNutrition=false`
  ).then((response) => response.json());
  console.log(data);
  // Return the data back to the frontend
  res.send(data);
});
