require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");
const mockData = require("./testSpoonacularData");

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", async (req, res) => {
  // Make a request to spoonacular
  const isDev = true;
  let data = null;
  if (isDev) {
    data = {
      results: [
        {
          id: 716426,
          title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
          image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 715594,
          title: "Homemade Garlic and Basil French Fries",
          image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 715497,
          title: "Berry Banana Breakfast Smoothie",
          image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 644387,
          title: "Garlicky Kale",
          image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 716268,
          title: "African Chicken Peanut Stew",
          image: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 716381,
          title: "Nigerian Snail Stew",
          image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 782601,
          title: "Red Kidney Bean Jambalaya",
          image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 794349,
          title: "Broccoli and Chickpea Rice Salad",
          image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 715446,
          title: "Slow Cooker Beef Stew",
          image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 715415,
          title: "Red Lentil Soup with Chicken and Turnips",
          image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
          imageType: "jpg",
        },
      ],
      offset: 0,
      number: 10,
      totalResults: 5226,
    };
  } else {
    data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`).then(
      (response) => response.json()
    );
  }
  // Return the data back to the frontend
  res.send(data);
});

app.get("/mealplan_calories", async (req, res) => {
  const calories = req.query.calories;
  console.log(calories);
  // Make a request to spoonacular
  const isDev = true;
  let data = null;
  if (isDev) {
    data = {
      meals: [
        {
          id: 596996,
          imageType: "jpg",
          title: "Homemade Vanilla Extract",
          readyInMinutes: 5,
          servings: 2,
          sourceUrl: "http://leitesculinaria.com/82842/recipes-homemade-vanilla-extract.html",
        },
        {
          id: 284356,
          imageType: "jpg",
          title: "Pineapple Parfaits",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl: "http://www.myrecipes.com/recipe/pineapple-parfaits-50400000132579/",
        },
        {
          id: 1096088,
          imageType: "jpg",
          title: "Baked Chicken Caprese",
          readyInMinutes: 30,
          servings: 4,
          sourceUrl: "https://spoonacular.com/baked-chicken-caprese-1096088",
        },
      ],
      nutrients: { calories: 2000.4, protein: 74.25, fat: 35.9, carbohydrates: 90.92 },
    };
  } else {
    const data = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${calories}`
    ).then((response) => response.json());
    console.log(data);
  }
  res.send(data);
});

app.get("/mealplan_recipes", async (req, res) => {
  const mealID = req.query.meal_id;
  console.log(mealID);
  // Make a request to spoonacular
  const isDev = true;
  let data = null;
  if (isDev) {
    console.log(mockData.mealPicturesData);
    data = mockData.mealPicturesData.find((data) => data.id.toString() === mealID);
  } else {
    data = await fetch(
      `https://api.spoonacular.com/recipes/${mealID}/information?apiKey=${process.env.API_KEY}&includeNutrition=false`
    ).then((response) => response.json());
    console.log(data);
  }

  res.send(data);
});
