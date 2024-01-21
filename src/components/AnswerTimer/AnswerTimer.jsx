import "./AnswerTimer.scss";
import { useEffect, useState, useRef } from "react";

function AnswerTimer({ duration, onTimeUp, disableAutoNext }) {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded((counter / duration) * 100);

    if (counter === duration) {
      clearInterval(intervalRef.current);
      setTimerEnded(true);
      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter, duration, onTimeUp]);

  return (
    <div className="answer-timer-container">
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 50
              ? "lightgreen"
              : progressLoaded < 70
              ? "orange"
              : "red"
          }`,
        }}
        className="progress"
      ></div>
      {disableAutoNext && timerEnded && onTimeUp()}
    </div>
  );
}

export default AnswerTimer;
