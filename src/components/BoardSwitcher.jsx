import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [currentBoard, setCurrentBoard] = useState(0);

  const toggle = () => {
    setCurrentBoard((currentBoard + 1) % props.numBoards);
  }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
