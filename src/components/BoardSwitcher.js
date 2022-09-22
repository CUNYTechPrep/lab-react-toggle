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
  let [numClicks, setNumClicks] = useState(0);
  for (let ii = 0; ii < props.numBoards; ii++) {
    if(numClicks >= props.numBoards) {
      numClicks = 0;
    }
    let isSelected = ii === numClicks;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={(e) => setNumClicks(numClicks + 1)}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
