import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [board, setBoard] = useState(0);
  
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === board;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  function Toggle() {
    setBoard((board + 1) % 5);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick = {Toggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
