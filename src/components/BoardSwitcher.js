//import React from "react";
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

  const [boxSelected, setBoxSelected] = useState(0);
  const handleToggle = (event) =>{
    setBoxSelected((prevBoxSelected) => {
      let newBoxSelected = prevBoxSelected+1;
      if (newBoxSelected === boards.length) newBoxSelected = newBoxSelected % boards.length;
      return newBoxSelected;
    });
  }
  /*
    how is the event handler connected with the variables with states? 
    what is allowed insie the function call of set<UseStateVariable>? 
    last time we did simple arithmetic this time we have an arrow function with
        a parameter 
  */
  
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === boxSelected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button>
      <handleToggle/>
    </div>
  );
}

export default BoardSwitcher;
