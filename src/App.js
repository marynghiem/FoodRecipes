import "./App.css";
import { FoodCarousel } from "./components/FoodCarousel";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Heading />
      <NavBar />
      <FoodCarousel />
    </div>
  );
}

export default App;
