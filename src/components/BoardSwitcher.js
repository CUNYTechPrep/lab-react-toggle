import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

//const [selectedIndex, setSelectedIndex] = useState(0);


function setSelectedIndex(prevSelectedIndex) {
  let newSelectedIndex = prevSelectedIndex+1;
  if (newSelectedIndex > 4) newSelectedIndex = 0;
  return newSelectedIndex;
}

function BoardSwitcher(props) {
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let newIndex = setSelectedIndex(ii);
    let isSelected = ii === newIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii}  />);
    
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
