
import React, {useState} from "react";


function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [numSelected, SetNumSelected] = useState(0);
  let boards = [];

  const handleClick = (event) =>{
    if(numSelected<props.numBoards-1){
      SetNumSelected(numSelected+1);
    } else {
      SetNumSelected(0);
    }
    
  }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === numSelected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }


  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
