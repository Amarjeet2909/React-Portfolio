import React, { useState, useEffect } from "react";
import './App.css';
import './Style.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ParticlesBackground from "./Components/Particles";
import About from "./Components/About";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
          <Route path="/" element={<ParticlesBackground />} />
        </Routes>
    </Router>
  );
}

export default App;