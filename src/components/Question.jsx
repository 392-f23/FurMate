import { useState } from "react";

// const [selectedAnswer, setSelectedAnswer] = useState('');

const AnswerButton = ({key, selection, setSelection}) => {
    return (
        <div className="answer-list" >
        {
            Object.values(question.answers).map(answer => (
                <div key={answer}>
                    <input type="radio" id={bubble} checked={bubble === selectedAnswer} autoComplete="off" onChange={() => setSelectedAnswer(bubble)} />
                </div>
            ))
        }
    </div>
    );
}

const Question = ({question}) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    return (
        <>
            <div>
                {question.question}
            </div>
            {
                Object.keys(question.answers).map(answer => <AnswerButton key={answer} selection={selectedAnswer} setSelection={setSelectedAnswer} />)
            }
        </>
    );
};

export default Question;