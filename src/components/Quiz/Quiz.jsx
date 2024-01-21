import { useState, useEffect } from "react";
import { resultInitalState } from "../../constants";
import "./Quiz.scss";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
import Result from "../Results/Results";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnwswerClick = (selectedAnswer, index) => {
    setAnswerIdx(index);
    setAnswer(selectedAnswer === correctAnswer);
  };

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    setTimeout(() => {
      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setCurrentQuestion(0);
        setShowResult(true);
      }

      setShowAnswerTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onAnwswerClick(false, -1); // Simulate a click on a non-existent index
    onClickNext(false);
  };

  useEffect(() => {
    if (showResult) {
      // Additional logic you may want to perform when showing the result
      // For example, save the score, etc.
    }
  }, [showResult]);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <>
              <AnswerTimer duration={5} onTimeUp={handleTimeUp} />
              <span className="active-question-no">{currentQuestion + 1}</span>
              <span className="total-question">/{questions.length}</span>
              <h2>{question}</h2>
              <ul>
                {choices.map((choice, index) => (
                  <li
                    onClick={() => onAnwswerClick(choice, index)}
                    key={choice}
                    className={answerIdx === index ? "selected-answer" : null}
                  >
                    {choice}
                  </li>
                ))}
              </ul>
              <div className="footer">
                <button
                  onClick={() => onClickNext(answer)}
                  disabled={answerIdx === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <Result
          result={result}
          onTryAgain={onTryAgain}
          totalquestions={questions.length}
        />
      )}
    </div>
  );
};

export default Quiz;
