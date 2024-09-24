import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
