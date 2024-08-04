import React from "react";

const PlayerPanel = ({ player, score, currentScore, isActive }) => {
  return (
    <div className={`player-panel ${isActive ? "active" : ""}`}>
      <div className="player-name">{player}</div>
      <div className="player-score">{score}</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score">{currentScore}</div>
      </div>
    </div>
  );
};

export default PlayerPanel;
