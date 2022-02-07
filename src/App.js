import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { FoodCarousel } from "./components/FoodCarousel";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Heading />
      <NavBar />
      <FoodCarousel />
      <AboutUs />
    </div>
  );
}
//consider using Route?
export default App;
