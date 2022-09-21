import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick() {
    console.log("The button has been clicked");
    if (selectedIndex === 4) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedIndex; // isSelected is true if current board has a certain index
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
