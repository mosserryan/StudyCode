import React, { useState } from "react";
import "./InfoTechQuiz.css";
function InfoTechQuiz() {
  const questions = [
    {
      questionText: "Why is the sky blue?",
      answerOptions: [
        { answerText: "It's not", isCorrect: false },
        { answerText: "Pink", isCorrect: false },
        { answerText: "Science", isCorrect: true },
        { answerText: "I give up", isCorrect: false },
      ],
    },
    {
      questionText: "Why is the sky blue?",
      answerOptions: [
        { answerText: "It's not", isCorrect: false },
        { answerText: "Pink", isCorrect: false },
        { answerText: "Science", isCorrect: true },
        { answerText: "I give up", isCorrect: false },
      ],
    },
    {
      questionText: "Why is the sky blue?",
      answerOptions: [
        { answerText: "It's not", isCorrect: false },
        { answerText: "Pink", isCorrect: false },
        { answerText: "Science", isCorrect: true },
        { answerText: "I give up", isCorrect: false },
      ],
    },
    {
      questionText: "Why is the sky blue?",
      answerOptions: [
        { answerText: "It's not", isCorrect: false },
        { answerText: "Pink", isCorrect: false },
        { answerText: "Science", isCorrect: true },
        { answerText: "I give up", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="score-section">
        {showScore ? (
          <div>
            {" "}
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="answerButton"
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default InfoTechQuiz;
