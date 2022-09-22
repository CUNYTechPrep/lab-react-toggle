import React from "react";
import  { useState } from 'react';

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  let [checked, setChecked] = useState(0);

  
  const handleClick= () => {
    setChecked((nowChecked) => {
      let nextChecked = nowChecked +1
      if(nextChecked>props.numBoards - 1) nextChecked = 0 
      return nextChecked;
    })
}
for (let ii = 0; ii < props.numBoards; ii++) {
  let isSelected = ii === checked;
  boards.push(<Board index={ii} selected={isSelected} key={ii} />);
}

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}



function handleClick(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BoardSwitcher;
