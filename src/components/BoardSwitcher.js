import { useState } from "react";
import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [currentIndex, setNewIndex] = useState(0);

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const change = () => {
    setNewIndex((currentIndex) => {
      return (currentIndex + 1) % props.numBoards
    }); 
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={change}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
