import React from "react";

const ControlPanel = ({ onNewGame, onRollDice, onHold }) => {
  return (
    <div>
      <button className="btn-new" onClick={onNewGame}>
        <i className="ion-ios-plus-outline"></i>New Game
      </button>
      <button className="btn-roll" onClick={onRollDice}>
        <i className="ion-ios-loop"></i>Roll Dice
      </button>
      <button className="btn-hold" onClick={onHold}>
        <i className="ion-ios-download-outline"></i>Hold
      </button>
    </div>
  );
};

export default ControlPanel;
