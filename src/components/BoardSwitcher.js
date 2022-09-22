import React, { useState } from "react";

function Board(props) {
  

  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}


function BoardSwitcher(props) {

  let [boxSelected, setBoxSelected] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === boxSelected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => setBoxSelected((boxSelected + 1) % 5)}>Toggle</button>
      <p> Current selection: {}</p>
    </div>
  );
}

export default BoardSwitcher;
