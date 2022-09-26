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
  const [boardNum, setBoard] = useState(0);
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === boardNum;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }
  
  function changeBoard(boardValue) {
    if (boardValue < 4)
      setBoard(boardNum + 1);
    else 
      setBoard(0);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => changeBoard(boardNum)}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
