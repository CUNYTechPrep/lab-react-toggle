import React from "react";
import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [index, setIndex] = useState(0);
  const handleClick = (event) => {
    if(index < 4){
      setIndex(index +1);
    }else{
      setIndex(0);
    }
    console.log(index);
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === index;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
