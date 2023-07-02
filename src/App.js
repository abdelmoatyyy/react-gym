import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Landing from "./components/Landing/Landing";
import SearchBar from "./components/SearchBar/SearchBar";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <>
      <Landing></Landing>
      <SearchBar />
      <Slider />
    </>
  );
}

export default App;
