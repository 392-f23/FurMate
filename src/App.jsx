import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questionnaire from "./components/Questionnaire";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      <Banner banner="FurMate" message="Find Your Pet Today!"/>
      <Questionnaire />
    </div>
  );
};

export default App;
