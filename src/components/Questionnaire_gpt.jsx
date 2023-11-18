import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import QuestionList from './QuestionList'; // Assuming this component exists
import useGetResults from './hooks/useGetResults'; // Custom hook for processing results
import './Questionnaire.css';

function Questionnaire() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const navigate = useNavigate();
    const getResults = useGetResults();

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            console.log('Questionnaire submitted.');
            try {
                const recommendations = getResults(selectedAnswers);
                // Navigate to the recommendations page with the results
                navigate('/recommendations', { state: { recommendations } });
            } catch (error) {
                console.error('Error processing results:', error);
            }
        }
    }, [isSubmitted, selectedAnswers, navigate, getResults]);

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    return (
        <div className="questionnaire">
            <h2>Pet Adoption Questionnaire</h2>
            <QuestionList onAnswerChange={handleAnswerChange} />
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default Questionnaire;
