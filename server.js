require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fetch = require("node-fetch");
const mockData = require("./testSpoonacularData");

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

/* Setup for serving react app to prod */
const publicPath = path.join(__dirname, "client/build");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
/* End setup for serving react app to prod */

// endpoint for front page
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

//endpoint for types of meals
app.get("/food_type_results", async (req, res) => {
  const mealtype = req.query.mealtype;
  let data = null;
  data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&type=${mealtype}&number=25`
  ).then((response) => response.json());
  res.send(data);
});

//endpoint calories
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

//endpoint for id information
app.get("/mealplan_recipes", async (req, res) => {
  const mealID = req.query.meal_id;
  console.log(mealID);
  // Make a request to spoonacular
  const isDev = false;
  let data = null;
  if (isDev) {
    console.log("mockdata:" + mockData.mealPicturesData);
    data = mockData.mealPicturesData.find((data) => data.id.toString() === mealID);
  } else {
    data = await fetch(
      `https://api.spoonacular.com/recipes/${mealID}/information?apiKey=${process.env.API_KEY}&includeNutrition=false`
    ).then((response) => response.json());
    console.log(data);
  }

  res.send(data);
});

//end point for food jokes

app.get("/meal_jokes", async (req, res) => {
  let data = null;
  const isDev = true;
  if (isDev) {
    data = {
      text: "Did you hear about the 2 men from the monastery who opened up a fast food seafood restaurant? One was the fish friar, and the other was the chip monk.",
    };
  } else {
    data = await fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${process.env.API_KEY}`).then((response) =>
      response.json()
    );
  }
  res.send(data);
});

//endpoint for mealplan info for ingredients
app.get("/mealplan_ingredients", async (req, res) => {
  const mealIngredients = req.query.mealIngredients;
  const isDev = false;
  let data = null;
  if (isDev) {
    data = [
      {
        id: 673463,
        title: "Slow Cooker Apple Pork Tenderloin",
        image: "https://spoonacular.com/recipeImages/673463-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 2,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 6008,
            amount: 2,
            unit: "cups",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Canned and Jarred",
            name: "beef broth",
            original: "2 cups beef broth",
            originalName: "beef broth",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/beef-broth.png",
          },
          {
            id: 10218,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Meat",
            name: "pork tenderloin",
            original: "Pork Tenderloin",
            originalName: "Pork Tenderloin",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/pork-tenderloin-raw.png",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Produce",
            name: "apple",
            original: "apple slicer (*optional)",
            originalName: "apple slicer (*optional)",
            meta: ["(*optional)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
          {
            id: 1069003,
            amount: 2,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "green apples",
            original: "2 green apples",
            originalName: "green apples",
            meta: ["green"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
          },
        ],
        unusedIngredients: [],
        likes: 0,
      },
      {
        id: 660261,
        title: "Slow Cooked Applesauce",
        image: "https://spoonacular.com/recipeImages/660261-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 2010,
            amount: 0.5,
            unit: "teaspoon",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Spices and Seasonings",
            name: "cinnamon",
            original: "1/2 teaspoon cinnamon",
            originalName: "cinnamon",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          },
          {
            id: 2025,
            amount: 1,
            unit: "pinch",
            unitLong: "pinch",
            unitShort: "pinch",
            aisle: "Spices and Seasonings",
            name: "nutmeg",
            original: "pinch of nutmeg",
            originalName: "pinch of nutmeg",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 5,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "apples",
            original: "5 apples from a local tree if possible",
            originalName: "apples from a local tree if possible",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 2,
      },
      {
        id: 621189,
        title: "beetroot apple smoothie",
        image: "https://spoonacular.com/recipeImages/621189-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 11080,
            amount: 0.5,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "beetroot",
            original: "1/2 beetroot",
            originalName: "beetroot",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/beets.jpg",
          },
          {
            id: 9252,
            amount: 1,
            unit: "large",
            unitLong: "large",
            unitShort: "large",
            aisle: "Produce",
            name: "pear",
            original: "1 large pear",
            originalName: "pear",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/pears-bosc.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1089003,
            amount: 2,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "granny smith apples",
            original: "2 granny smith apples",
            originalName: "granny smith apples",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
      {
        id: 633547,
        title: "Baked Cinnamon Apple Slices",
        image: "https://spoonacular.com/recipeImages/633547-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 2010,
            amount: 1.5,
            unit: "tablespoons",
            unitLong: "tablespoons",
            unitShort: "Tbsp",
            aisle: "Spices and Seasonings",
            name: "cinnamon",
            original: "1 1/2 tablespoons of Cinnamon",
            originalName: "Cinnamon",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          },
          {
            id: 9299,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Dried Fruits;Produce;Baking",
            name: "raisins",
            original: "1/2 cup of Raisins",
            originalName: "Raisins",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/raisins.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 4,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "apples",
            original: "4 Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
            originalName: "Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
            meta: ["peeled", "sliced"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
      {
        id: 716433,
        title: "Easiest Breakfast Ever: Sunny Fruit Parfait",
        image: "https://spoonacular.com/recipeImages/716433-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 9299,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Dried Fruits;Produce;Baking",
            name: "raisins",
            original: "organic raisins",
            originalName: "organic raisins",
            meta: ["organic"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/raisins.jpg",
          },
          {
            id: 12036,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Savory Snacks",
            name: "sunflower seeds",
            original: "sunflower seeds",
            originalName: "sunflower seeds",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/sunflower-seeds.jpg",
          },
          {
            id: 1116,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Milk, Eggs, Other Dairy",
            name: "yogurt",
            original: "plain yogurt, unsweetened (regular or greek)",
            originalName: "plain yogurt, unsweetened (regular or greek)",
            meta: ["plain", "unsweetened", "(regular or greek)"],
            extendedName: "unsweetened plain yogurt",
            image: "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 1,
            unit: "serving",
            unitLong: "serving",
            unitShort: "serving",
            aisle: "Produce",
            name: "apple",
            original: "chopped organic apple, unpeeled (grated instead of chopped for very small children)",
            originalName: "chopped organic apple, unpeeled (grated instead of chopped for very small children)",
            meta: ["organic", "grated", "unpeeled", "chopped", "for very small children)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 93,
      },
      {
        id: 633548,
        title: "Baked Cinnamon Apple Wedges",
        image: "https://spoonacular.com/recipeImages/633548-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 19911,
            amount: 1,
            unit: "tsp",
            unitLong: "teaspoon",
            unitShort: "tsp",
            aisle: "Cereal",
            name: "maple syrup",
            original: "1 tsp maple syrup",
            originalName: "maple syrup",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup.png",
          },
          {
            id: 2010,
            amount: 0.5,
            unit: "tsp",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Spices and Seasonings",
            name: "cinnamon",
            original: "1/2 tsp cinnamon",
            originalName: "cinnamon",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          },
          {
            id: 2025,
            amount: 0.25,
            unit: "tsp",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Spices and Seasonings",
            name: "nutmeg",
            original: "1/4 tsp nutmeg",
            originalName: "nutmeg",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 1,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "apple",
            original: "1 apple",
            originalName: "apple",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 2,
      },
      {
        id: 662665,
        title: "Swiss Bircher Muesli",
        image: "https://spoonacular.com/recipeImages/662665-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 1077,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Milk, Eggs, Other Dairy",
            name: "milk",
            original: "1/2 cup of Milk",
            originalName: "Milk",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
          },
          {
            id: 42184,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Cereal",
            name: "muesli",
            original: "1/2 cup muesli",
            originalName: "muesli",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/granola.jpg",
          },
          {
            id: 43261,
            amount: 3,
            unit: "tablespoons",
            unitLong: "tablespoons",
            unitShort: "Tbsp",
            aisle: "Milk, Eggs, Other Dairy",
            name: "skim vanilla yoghurt",
            original: "3 tablespoons of plain or vanilla yoghurt",
            originalName: "plain or vanilla yoghurt",
            meta: ["plain"],
            extendedName: "plain skim vanilla yoghurt",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 1,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "apple",
            original: "1 Apple",
            originalName: "Apple",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
      {
        id: 662175,
        title: "Sugar-Free Apple and Cinnamon Jam",
        image: "https://spoonacular.com/recipeImages/662175-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 11663,
            amount: 0.5,
            unit: "teaspoon",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Ethnic Foods;Health Foods",
            name: "agar",
            original: "1/2 teaspoon agar-agar powder",
            originalName: "agar-agar powder",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
          },
          {
            id: 1012010,
            amount: 1,
            unit: "teaspoon",
            unitLong: "teaspoon",
            unitShort: "tsp",
            aisle: "Spices and Seasonings",
            name: "cinnamon powder",
            original: "1 teaspoon cinnamon powder",
            originalName: "cinnamon powder",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          },
          {
            id: 99190,
            amount: 1.5,
            unit: "cups",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Baking",
            name: "sukrin sweetener",
            original: "1 1/2 cups sweetener (I used Candarel)",
            originalName: "sweetener (I used Candarel)",
            meta: ["(I used Candarel)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/sugar-substitute.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 1,
            unit: "medium",
            unitLong: "medium",
            unitShort: "medium",
            aisle: "Produce",
            name: "apples",
            original:
              "medium Around 10 sized eating (not cooking) apples, peeled, cored and chopped into ½ inch pieces",
            originalName: "Around 10 sized eating (not cooking) apples, peeled, cored and chopped into ½ inch pieces",
            meta: ["cored", "peeled", "chopped", "(not cooking)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
      {
        id: 663748,
        title: "Traditional Apple Tart",
        image: "https://spoonacular.com/recipeImages/663748-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 19297,
            amount: 4,
            unit: "tablespoons",
            unitLong: "tablespoons",
            unitShort: "Tbsp",
            aisle: "Nut butters, Jams, and Honey",
            name: "jam",
            original: "4 tablespoons blackcurrant jam",
            originalName: "blackcurrant jam",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/strawberry-jam.png",
          },
          {
            id: 10018338,
            amount: 500,
            unit: "grams",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Refrigerated;Frozen",
            name: "pastry crust",
            original: "500 grams 1lb 2oz short crust pastry – ready made if you want",
            originalName: "1lb 2oz short crust pastry – ready made if you want",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/dough.jpg",
          },
          {
            id: 1145,
            amount: 80,
            unit: "grams",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Milk, Eggs, Other Dairy",
            name: "unsalted butter",
            original: "80 grams 3oz unsalted butter",
            originalName: "3oz unsalted butter",
            meta: ["unsalted"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1089003,
            amount: 1.5,
            unit: "pounds",
            unitLong: "pounds",
            unitShort: "lb",
            aisle: "Produce",
            name: "granny smith apple",
            original: "1 1/2 pounds 3 cooking apples such as Bramley or Granny Smiths",
            originalName: "3 cooking apples such as Bramley or Granny Smiths",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
      {
        id: 636835,
        title: "Canadian apple butter",
        image: "https://spoonacular.com/recipeImages/636835-312x231.jpg",
        imageType: "jpg",
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [
          {
            id: 93812,
            amount: 0.25,
            unit: "tsp",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Gourmet",
            name: "vanilla powder",
            original: "¼ tsp vanilla powder",
            originalName: "vanilla powder",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/vanilla-sugar.jpg",
          },
          {
            id: 2010,
            amount: 1,
            unit: "pinch",
            unitLong: "pinch",
            unitShort: "pinch",
            aisle: "Spices and Seasonings",
            name: "cinnamon",
            original: "1 pinch cinnamon",
            originalName: "cinnamon",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          },
          {
            id: 1001,
            amount: 30,
            unit: "g",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Milk, Eggs, Other Dairy",
            name: "butter",
            original:
              "30g / 1 oz. / 2 tbsp butter (for a vegan version, I believe you could use margarine or coconut oil? Let me know)",
            originalName:
              "1 oz. / 2 tbsp butter (for a vegan version, I believe you could use margarine or coconut oil? Let me know)",
            meta: ["(for a vegan version, I believe you could use margarine or coconut oil? Let me know)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 9003,
            amount: 850,
            unit: "g",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Produce",
            name: "apples",
            original: "850g /30 oz. apples (about 3-4)",
            originalName: "30 oz. apples (about 3-4)",
            meta: ["( 3-4)"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          },
        ],
        unusedIngredients: [],
        likes: 1,
      },
    ];
  } else {
    console.log(mealIngredients);
    data = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${mealIngredients}`
    ).then((response) => response.json());
    console.log(data);
  }
  res.send(data);
});
