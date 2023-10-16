import { useState } from 'react';
import QuestionList from "./QuestionList";
import './Questionnaire.css'
import { useNavigate } from 'react-router-dom';


const Questionnaire = () => {
  let navigate = useNavigate();
  
  const questionnaire = {
    questions: [
      {
        question: "How old are you?",
        answers: ["<18", "18-24", ">24", ">50"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the largest mammal on Earth?",
        answers: ["Blue Whale", "Elephant", "Giraffe", "Lion"],
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Leo Tolstoy",
        ],
      },
      {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "CO2", "O2", "N2"],
      },
    ],
  };
  // const emptyAnswers = [];
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questionnaire.questions.length-1).fill(-1));
//  const [answers, setAnswers] = useState([]);

  return (
    <div className='container'>
      <QuestionList questions= {questionnaire.questions} selected={selectedAnswers} setSelected={setSelectedAnswers}/>
      <button onClick={()=>navigate('/recommendations')}>Submit</button>
    </div>
  );
};

export default Questionnaire;
