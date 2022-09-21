//import React from "react";
import React, {useState} from "react";
function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  
  //numClicks starts at 0, increments on click, and resets when >2
  const [numClicks, setNumClicks] = useState(0); 

    const handleClick = (event) => {
      setNumClicks(numClicks + 1);
    }; 

    if (numClicks > 4) {
      setNumClicks(0);
    }

  
  //isSelected determines which panel is toggled. 
  //formula: on screen panel # = ii+1

  //Given Code:
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === numClicks;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick = {handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
