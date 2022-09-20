// import React from "react";
import React, {useState} from 'react';


function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {

  const [counter, setCount] = useState(0);
  let boards = [];
  for (let ii = 0; ii < props.numboards; ii++) {
    let count = ii === counter % props.numboards;
    boards.push(<Board index={ii} selected={count} key={ii} />);
  }

  


  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => setCount(counter + 1)}>Toggle</button>
      <p>You clicked {counter} time</p>
    </div>
    //click counter works
  );

}

export default BoardSwitcher;
