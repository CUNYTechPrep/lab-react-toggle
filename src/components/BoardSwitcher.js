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

  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    if(count < 4){
      setCount(count+1);
    }else{
      setCount(0);
    }
  };

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === count;
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