import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questionnaire from "./components/Questionnaire";
import Banner from "./components/Banner";
import RecommendationList from "./components/RecommendationList";
import animals from "./components/animals";



const App = () => {

  return (
    <div>
      <Banner banner="FurMate" message="Find Your Pet Today!"/>
      <RecommendationList pets={animals}/>
    </div>
  );
};

export default App;
