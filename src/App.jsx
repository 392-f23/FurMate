import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questionnaire from "./components/Questionnaire";
import Banner from "./components/Banner";
import RecommendationList from "./components/RecommendationList";
import animals from "./components/animals";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  return (
    <div className="App">
      <Banner banner="FurMate" message="Find Your Pet Today!" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questionnaire />}></Route>
          <Route path="/recommendations" element={<RecommendationList pets={animals} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
