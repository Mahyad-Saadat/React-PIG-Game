import React, { useState } from "react";
import PlayerPanel from "./Components/PlayerPanel";
import ControlPanel from "./Components/ControlPanel";
import Dice from "./Components/Dice";
import InputField from "./Components/InputField";
import "./index.css";

const App = () => {
  const [scores, setScores] = useState([0, 0]);
  const [roundScore, setRoundScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [gamePlaying, setGamePlaying] = useState(true);
  const [dice, setDice] = useState(null);

  const init = () => {
    setScores([0, 0]);
    setRoundScore(0);
    setActivePlayer(0);
    setGamePlaying(true);
    setDice(null);
  };

  const nextPlayer = () => {
    setRoundScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const rollDice = () => {
    if (gamePlaying) {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      setDice(diceValue);
      if (diceValue !== 1) {
        setRoundScore(roundScore + diceValue);
      } else {
        nextPlayer();
      }
    }
  };

  const hold = () => {
    if (gamePlaying) {
      const newScores = [...scores];
      newScores[activePlayer] += roundScore;
      setScores(newScores);

      if (newScores[activePlayer] >= 100) {
        setGamePlaying(false);
      } else {
        nextPlayer();
      }
    }
  };

  return (
    <div className="wrapper clearfix">
      <PlayerPanel
        player="Player 1"
        score={scores[0]}
        currentScore={activePlayer === 0 ? roundScore : 0}
        isActive={activePlayer === 0}
      />
      <PlayerPanel
        player="Player 2"
        score={scores[1]}
        currentScore={activePlayer === 1 ? roundScore : 0}
        isActive={activePlayer === 1}
      />
      <InputField />
      <ControlPanel onNewGame={init} onRollDice={rollDice} onHold={hold} />
      {dice && <Dice value={dice} />}
    </div>
  );
};

export default App;
