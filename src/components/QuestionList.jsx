import Question from "./Question";

const QuestionList = ({ questions , selected, setSelected}) => {
  return (
    <div className="question-list">
      {Object.values(questions).map((id, index) => (
        <div key={id}>
          <Question question={id} id={index} selected={selected} setSelected={setSelected}/>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
