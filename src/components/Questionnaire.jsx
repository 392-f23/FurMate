import React, { useState, useEffect } from 'react';
import QuestionList from "./QuestionList";
import './Questionnaire.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import getResults from '../utilities/getResults';
import useGetResults from '../utilities/getResults';

const Questionnaire = ({ setResults }) => {
  let navigate = useNavigate();
  console.log("PRINTING NAVIGATE");
  console.log(navigate);
  const[isSubmitted, setIsSubmitted] = useState(false);

  const questionnaire = {
    questions: [
      {
        question: "Are you an active or sedentary person?",
        answers: [
          "Very Active: I lead a highly active lifestyle and engage in rigorous physical activities regularly.", 
          "Moderately Active: I enjoy some physical activities but also value relaxation.", 
          "Mostly Sedentary: I prefer a calm, indoor lifestyle."
        ],
      },
      {
        question: "Are you looking for a loyal and protective companion, or do you want a more independent pet?",
        answers: [
          "Very Independent: I'm looking for a pet that's quite independent.", 
          "Moderately Loyal and Independent: I prefer a balance of loyalty and independence.", 
          "Extremely Loyal and Protective: I want a pet that's highly loyal and protective."
        ],
      },
      {
        question: "How much time can you realistically dedicate to exercise and play with your pet each day?",
        answers: [
          "Several Hours: I can commit several hours daily to exercise and play.", 
          "About an Hour: I have about an hour each day for exercise and play.", 
          "Limited Time: I have limited time for daily exercise and play."
        ],
      },
      {
        question: "What size living space do you have, and does it accommodate the size and activity level of the breed you're considering?",
        answers: [
          "Large and Spacious Home: I have a large and spacious home suitable for an active breed.",
          "Moderately Sized Space: My living space is moderately sized and can accommodate a variety of breeds.",
          "Average-Sized Space: My living space is of average size, and I need a breed that suits it.",
          "Small Living Space: I have a small living space and need a breed suitable for it.",
        ],
      },
      {
        question: "Are you looking for a pet that is highly intelligent and trainable, or are you okay with a more independent-minded breed?",
        answers: [
          "Highly Intelligent and Trainable: I want a highly intelligent and trainable pet.", 
          "Moderately Intelligent and Trainable: I prefer a pet that's moderately intelligent and trainable.", 
          "Balanced: I value intelligence but also appreciate an independent-minded pet.", 
          "Moderately Independent-Minded: I'm open to a moderately independent-minded breed.", 
          "Very Independent-Minded: I'm okay with a pet that's very independent."
        ],
      },
      
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questionnaire.questions.length).fill(-1));
  const { petScores, error } = useGetResults(selectedAnswers);

  useEffect(() => {
    console.log("IN USEEFFECT");
    console.log(isSubmitted);
    console.log(petScores);
    if (isSubmitted && petScores) {
      console.log("IN IF");
      setResults(petScores);
      navigate('/recommendations');
    }
    if (error) {
      console.error('Failed to submit: ', error);
    }
  }, [isSubmitted, petScores, error, setResults, navigate]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className='container'>
      <QuestionList questions={questionnaire.questions} selected={selectedAnswers} setSelected={setSelectedAnswers}/>
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Questionnaire;
