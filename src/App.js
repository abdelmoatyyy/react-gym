import logo from "./logo.svg";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchBar from "./components/SearchBar/SearchBar";
import SliderCard from "./components/SliderCard/SliderCard";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="">
      <SearchBar />
      <Slider />
    </div>
  );
}

export default App;
