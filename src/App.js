import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Landing from "./components/Landing/Landing";
import SearchBar from "./components/SearchBar/SearchBar";
import Slider from "./components/Slider/Slider";
import Results from "./components/Results/Results"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Landing></Landing>
      <SearchBar />
      <Slider />
      <Results/>
      <Footer/>
    </>
  );
}

export default App;
