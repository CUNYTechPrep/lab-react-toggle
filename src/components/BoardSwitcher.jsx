import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}> {props.index + 1} </div>;
}

function BoardSwitcher(props) {

  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  const handleClick = (event) => {
    if(selectedBoardIndex === props.numBoards - 1){ 
      setSelectedBoardIndex(0);
    }
    else {
      setSelectedBoardIndex(selectedBoardIndex + 1);
    }

}

  let boards = [];
  for (let boardIndex = 0; boardIndex < props.numBoards; boardIndex++) {
    let isSelected = boardIndex === selectedBoardIndex;
    boards.push(<Board index={boardIndex} selected={isSelected} key={boardIndex} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick = {handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
