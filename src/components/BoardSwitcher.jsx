import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  // add state to track current selection
  // state variable
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  // create an event handler
  const handleClick = (event) => {
    // use the getter when trying to update the setter of state variable 
    setSelectedBoardIndex((selectedBoardIndex + 1) % props.numBoards);
  }
  let boards = [];
  for (let boardIndex = 0; boardIndex < props.numBoards; boardIndex++) {
    let isSelected = boardIndex === selectedBoardIndex;
    boards.push(<Board index={boardIndex} selected={isSelected} key={boardIndex} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
