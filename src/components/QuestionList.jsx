import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <div className="question-list">
      {Object.values(questions).map((id) => (
        <div key={id}>
          <Question question={id} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
