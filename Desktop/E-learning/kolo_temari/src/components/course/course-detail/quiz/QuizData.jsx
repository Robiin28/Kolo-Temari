import React, { useState } from 'react';
import './quiz.css';

const quizData = [
  {
    id: 'q1',
    question: 'What is the capital of France?',
    options: [
      { value: 'paris', label: 'Paris' },
      { value: 'london', label: 'London' },
      { value: 'berlin', label: 'Berlin' },
      { value: 'madrid', label: 'Madrid' },
    ],
    correctAnswer: 'paris',
  },
  {
    id: 'q2',
    question: 'Which planet is known as the Red Planet?',
    options: [
      { value: 'earth', label: 'Earth' },
      { value: 'mars', label: 'Mars' },
      { value: 'jupiter', label: 'Jupiter' },
      { value: 'saturn', label: 'Saturn' },
    ],
    correctAnswer: 'mars',
  },
  // Add more questions as needed
];

export const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionId, optionValue) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let calculatedScore = 0;
    quizData.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {quizData.map(question => (
          <div key={question.id} className="question">
            <h2>{question.question}</h2>
            {question.options.map(option => (
              <div key={option.value} className="option">
                <input
                  type="radio"
                  id={`${question.id}-${option.value}`}
                  name={question.id}
                  value={option.value}
                  checked={answers[question.id] === option.value}
                  onChange={() => handleOptionChange(question.id, option.value)}
                />
                <label htmlFor={`${question.id}-${option.value}`}>{option.label}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {score !== null && (
        <div className="score">
          <h2>Your Score: {score} / {quizData.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
