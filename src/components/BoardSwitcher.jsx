import React from "react";
import { useState } from "react";

function Board({selected, index}) {
  let className = "board";

  if (selected) {
    className += " selected";
  }

  return <div className={className}> {index}</div>;
}

function BoardSwitcher({numBoards}) {
  let boards = [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  //initializes the board and sets the initial position to be 0
  for (let boardIndex = 0; boardIndex < numBoards; boardIndex++) {
    let isSelected = boardIndex === selectedIndex;
    boards.push(<Board index={boardIndex} selected={isSelected} key={boardIndex} />);
  }

  //handling board index changies
  const handleClick = (event) =>{

    // if(selectedIndex === numBoards -1){//if we have reached the end of the boards
    //   //reset to initial board
    //   setSelectedIndex(selectedIndex % numBoards);
    // }else{
    //   setSelectedIndex(selectedIndex + 1);
    // }

    setSelectedIndex((selectedIndex + 1) % numBoards);

    console.log(selectedIndex)
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
