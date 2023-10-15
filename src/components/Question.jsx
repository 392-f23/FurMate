import { useState } from "react";
import "/src/components/Question.css";

// const [selectedAnswer, setSelectedAnswer] = useState(-1);

const changeSelectedAnswer = (question, answer, selectedAnswers, setSelectedAnswers) => {
    const selectedAnswers2 = selectedAnswers;
    selectedAnswers2[question] = answer;
    setSelectedAnswers(selectedAnswers2);
}

const AnswerButton = ({ id, questionID, text, selection, setSelection, test }) => {
  console.log("All Answers: "+test);
  
  const updateItemAtIndex = (index, newValue) => {
    setSelection(prevItems => prevItems.map((item, i) => (i === index ? newValue : item)));
  } 

  const onClickRadio = (value) =>{
    console.log("Answer of question " + questionID + " set to: "+ value);
    updateItemAtIndex(questionID, value);
  }

  return (
    <div class={`form-check ${selection === id? "form-selected": ""}`}
        value={id}
        onClick={(e) => onClickRadio(id)}>
      <label class="form-check-label" for="flexRadioDefault1">
        {text}
      </label>
    </div>
  );
};

const Question = ({ id, question , selected, setSelected}) => {
  return (
    <>
      <div>{question.question}</div>
      {question.answers.map((answer, answerID) => (
        <AnswerButton
          id={answerID}
          questionID = {id}
          text={answer}
          selection={selected[id]}
          setSelection={setSelected}
          test={selected}
        />
      ))}
    </>
  );
};

export default Question;
