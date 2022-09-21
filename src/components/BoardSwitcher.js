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
  const [selectedBoard, setSelected] = useState(0);
  function handleSelected(){
    console.log("The toggle button has been pressed!");
    if(selectedBoard === props.numBoards - 1){
      setSelected(0);
    }else setSelected(selectedBoard + 1);
  }
  
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleSelected}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
