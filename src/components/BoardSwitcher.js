import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let boards = [];

  const handleToggle = (event) => setSelectedIndex((selectedIndex)=>{
    selectedIndex+=1;
    if(selectedIndex>=props.numBoards)
      selectedIndex = 0;
    return selectedIndex;
  });

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
