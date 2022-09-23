import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  
  // state to track current selection
  const [currentSelect, setCurrentSelect] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentSelect;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  // event handler for toggle button -> go to next board and wrap around
  const handleClick = (event) => {
    console.log("the button was pressed!");
    if (currentSelect >= props.numBoards-1) {
      setCurrentSelect(0)
    }
    else {
      setCurrentSelect(currentSelect +1);
    }
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
