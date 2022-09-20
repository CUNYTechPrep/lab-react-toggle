
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
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === 0;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }


  const [currSel,setCurSel] = useState(0);
  const [refBoard,setBoard] = useState(boards);

  const f = (e) => { 
    boards = [];
    setCurSel(currSel+1);
    if(currSel >= props.numBoards-1) setCurSel(0);
    for (let ii = 0; ii < props.numBoards; ii++) {
      let isSelected = ii === currSel;
      boards.push(<Board index={ii} selected={isSelected} key={ii} />);
    }
    setBoard(boards);
  }

  return (
    <div>
      <div className="boards">{refBoard}</div>
      <button onClick={f}>Toggle</button>
    </div>
  );

  }
export default BoardSwitcher;
