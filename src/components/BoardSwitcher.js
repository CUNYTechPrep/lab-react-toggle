import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [count, setCount] = useState(0);
  const eventHandler = (e) => {
    if (count >= props.numBoards) {
      return setCount(0);
    } else {
      return setCount(count + 1);
    }
  };
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === count;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={eventHandler}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
