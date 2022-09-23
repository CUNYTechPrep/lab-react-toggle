import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selected, setSelected] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const onClickHandler = () => {
    setSelected((prev) => (prev + 1) % props.numBoards);
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={onClickHandler}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
