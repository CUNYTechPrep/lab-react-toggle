import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  const handleClick = (event) => {
    setSelectedBoardIndex((selectedBoardIndex + 1) % props.numBoards);
  }

  let boards = [];
  for (let i = 0; i < props.numBoards; i++) {
    let isBoardSelected = i === selectedBoardIndex;
    boards.push(<Board index={i} selected={isBoardSelected} key={i} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
