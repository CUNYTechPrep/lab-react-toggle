import React, { useState }  from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
   
  const handleClick = (event) => {
   setSelectedBoardIndex((selectedBoardIndex + 1) % props.numBoards);

  }


  let boards = [];
  for (let boardIndex = 0; boardIndex < props.numBoards; boardIndex++) {
    let isBoardSelected = boardIndex === selectedBoardIndex;
    boards.push(<Board index={boardIndex} selected={isBoardSelected} key={boardIndex} />);
  }


  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}> Toggle </button>
    </div>
  );
}

export default BoardSwitcher;
