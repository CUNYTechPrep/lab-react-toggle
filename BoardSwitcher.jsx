import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  let [count, toggle]=useState(0)
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === count;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => toggle((count) => count==4 ? count=0 :count + 1)}>Toggle</button>
    </div>
  );
}



export default BoardSwitcher;
