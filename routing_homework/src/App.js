import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Food from "./pages/Food";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/food">Food</Link>
        
        <Link to="/thispagedoesnotexist">Test 404</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/food" element={<Food />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
