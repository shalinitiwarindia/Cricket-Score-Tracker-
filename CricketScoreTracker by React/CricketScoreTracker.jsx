import React, { useState } from 'react';
import './CricketScoreTracker.css'; // Assuming you'll add some custom styles

const CricketScoreTracker = () => {
  const [score, setScore] = useState(76);
  const [wickets, setWickets] = useState(2);
  const [balls, setBalls] = useState(50);
  const [indiaWon, setIndiaWon] = useState(false);

  // Function to update the score
  const increaseScore = (runs) => {
    if (!indiaWon) {
      const newScore = score + runs;
      setScore(newScore);
      if (newScore > 100) {
        setIndiaWon(true);
      }
    }
  };

  // Function to update the wickets
  const increaseWicket = () => {
    if (!indiaWon && wickets < 12) {
      setWickets(wickets + 1);
    }
  };

  // Function to update the balls (over)
  const increaseBalls = () => {
    if (!indiaWon) {
      setBalls(balls + 1);
    }
  };

  return (
    <div className="cricket-score-tracker">
      <div>
        Score: <h1 className="scoreCount">{score}</h1>
      </div>

      <div>
        Wickets: <h1 className="wicketCount">{wickets}</h1>
      </div>

      <div>
        Overs: <h1 className="overCount">{Math.floor(balls / 6)}.{balls % 6}</h1>
      </div>

      <div className="addScore">
        <button className="addScore1" onClick={() => increaseScore(1)}>Add 1</button>
        <button className="addScore4" onClick={() => increaseScore(4)}>Add 4</button>
        <button className="addScore6" onClick={() => increaseScore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        <button onClick={increaseWicket}>Add Wicket</button>
      </div>

      <div className="addBall">
        <button onClick={increaseBalls}>Add Ball</button>
      </div>

      {indiaWon && (
        <div>
          <h1 className="status">India Won</h1>
        </div>
      )}
    </div>
  );
};

export default CricketScoreTracker;
