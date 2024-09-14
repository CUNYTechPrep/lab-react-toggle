import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [SelectedBoardIndex, setSelectedBoardIndex] = useState(0);

  const handleClick = (event) => {
    setSelectedBoardIndex((prevIndex) => (prevIndex + 1) % props.numBoards);
  };

  let boards = [];
  for (let Index = 0; Index < props.numBoards; Index++) {
    let isSelected = Index === SelectedBoardIndex;
    boards.push(<Board index={Index} selected={isSelected} key={Index} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
