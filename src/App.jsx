import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questionnaire from "./components/Questionnaire";
import Banner from "./components/Banner";
import RecommendationList from "./components/RecommendationList";
import animals from "./components/animals";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavBar";


const App = () => {

  const [QuestionnaireResults, setQuestionnaireResults] = useState([]);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Banner banner="FurMate" message="Find Your Pet Today!" />
        <Routes>
          <Route path="/" element={<Questionnaire setResults={setQuestionnaireResults}/>}></Route>
          <Route path="/recommendations" element={<RecommendationList results={QuestionnaireResults} />}></Route>
        </Routes>
        {/* <BottomNavbar /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
