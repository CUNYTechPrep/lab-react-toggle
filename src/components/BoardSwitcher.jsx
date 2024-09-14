import React from "react";
import { useState } from 'react';

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  const [curr, setCurr] = useState(0);

  function handleClick() {
    if (curr < props.numBoards-1) {
      setCurr(curr+1)
    } else {
      setCurr(0)
    }
    
  }



  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === curr;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
    
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={ handleClick }>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
