import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { FoodCarousel } from "./components/FoodCarousel";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { NavBar } from "./components/NavBar";
import { FetchingStuff } from "./components/FetchingStuff";

function App() {
  return (
    <div className="App">
      <div className="homePageWrapper">
        <Heading />
        <NavBar />
        <FoodCarousel />
        <AboutUs />
        <FetchingStuff />
      </div>
      <Footer />
    </div>
  );
}
//consider using Route?
export default App;
