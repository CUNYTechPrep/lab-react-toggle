import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoard, setSelectedBoard] = useState(0); // State to track the selected board

  const toggleBoard = () => {
    setSelectedBoard((prevBoard) => (prevBoard + 1) % props.numBoards); // Toggles between boards
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard; // Check if current board is selected
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoard}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
