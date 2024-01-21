import "./Results.scss";
import { useState, useEffect } from "react";

const Result = ({ totalquestions, result, onTryAgain }) => {
  const [name, setName] = useState("");
  const [highscores, setHighscores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    setHighscores(storedScores);
  }, []);

  const handleSave = () => {
    const score = {
      name,
      score: result.score,
    };

    const newHighscores = [...highscores, score].sort(
      (a, b) => b.score - a.score
    );
    setHighscores(newHighscores);
    setShowScores(true);
    localStorage.setItem("highscores", JSON.stringify(newHighscores));
  };

  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        Total Questions: <span>{totalquestions}</span>
      </p>
      <p>
        Total Score: <span>{result.score}</span>
      </p>
      <p>
        Correct Answers: <span>{result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span>{result.wrongAnswers}</span>
      </p>
      <button onClick={onTryAgain}>Try again</button>

      {!showScores ? (
        <>
          <h3>Enter Your Name Below to Save Your Score!</h3>
          <input
            placeholder="Your Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highscores.map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Result;
