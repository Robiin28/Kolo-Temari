import React, { useState, useEffect } from "react";
import { FaVolumeUp, FaClock } from "react-icons/fa";
import "./quiz.css";
import { FaGraduationCap, FaReadme } from "react-icons/fa6";

// Example quiz data
const quizData = [
  {
    id: "q1",
    question: "What is the capital of France?",
    options: [
      { value: "paris", label: "Paris" },
      { value: "london", label: "London" },
      { value: "berlin", label: "Berlin" },
      { value: "madrid", label: "Madrid" },
    ],
    correctAnswer: "paris",
  },
  {
    id: "q2",
    question: "Which planet is known as the Red Planet?",
    options: [
      { value: "earth", label: "Earth" },
      { value: "mars", label: "Mars" },
      { value: "jupiter", label: "Jupiter" },
      { value: "saturn", label: "Saturn" },
    ],
    correctAnswer: "mars",
  },
];

export const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0); // Remaining time in seconds
  const [quizStarted, setQuizStarted] = useState(false); // Quiz start state

  useEffect(() => {
    if (!quizStarted) return;

    const hardCodedStartTime = new Date(); // Simulating the start time as now
    const durationInMinutes = 3; // 3 minutes duration
    const hardCodedEndTime = new Date(
      hardCodedStartTime.getTime() + durationInMinutes * 60000
    );

    const currentTime = new Date().getTime();
    const quizStartTime = hardCodedStartTime.getTime();
    const quizEndTime = hardCodedEndTime.getTime();

    if (currentTime >= quizStartTime && currentTime <= quizEndTime) {
      setTimeLeft(Math.floor((quizEndTime - currentTime) / 1000));
    } else if (currentTime > quizEndTime) {
      handleTimeUp();
    } else {
      alert("The quiz hasn't started yet!");
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  const handleOptionClick = (questionId, optionValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let calculatedScore = 0;
    quizData.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
  };

  const handleTimeUp = () => {
    setScore(0); // Or any logic you want to execute when time is up
    alert("Time's up!");
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeakClick = (question) => {
    speak(question);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };
  const handleLeaveQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <>
      <div className="container_top">
        <div className="top-card">
          <div className="img">
            <img className="img_1" src="image/kolo.png" alt="kolo" />
            <h2>Advanced React Course</h2>
          </div>
          <div className="span">
            <span> <FaReadme /> React</span>
            <span> <FaGraduationCap /> Junior Level</span>
          </div>
        </div>
        <div className="quiz_description">
          <p>This quiz is prepared for the course</p>
          <span>Prepared by</span>
          <div className="img2">
            <img className="img_2" src="image/kolo.png" alt="kolo" />
            <h2>Robel BM</h2>
          </div>
        </div>
        <div className="buttons">
          <button className="button but" onClick={handleStartQuiz}>
            Start Quiz
          </button>
          <button className="but" onClick={handleLeaveQuiz}>Leave Quiz</button>
        </div>
      </div>
      
      {quizStarted && (
        <>
          <div className="timer-container">
            <FaClock className="clock-icon" />
            <span className="time-display">{formatTime(timeLeft)}</span>
          </div>
          <div className="quiz-container">
            <form onSubmit={handleSubmit}>
              {quizData.map((question) => (
                <div key={question.id} className="question">
                  <FaVolumeUp
                    className="volume-icon"
                    onClick={() => handleSpeakClick(question.question)}
                  />
                  <span className="textVoice">{question.question}</span>
                  <h3>Choose matching term</h3>
                  <div className="options-container">
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className={`option-box ${
                          answers[question.id] === option.value ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleOptionClick(question.id, option.value)
                        }
                      >
                        <label htmlFor={`${question.id}-${option.value}`}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="quizSubmit" type="submit">
                Submit
              </button>
            </form>
            {score !== null && (
              <div className="score">
                <h2>
                  Your Score: {score} / {quizData.length}
                </h2>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
