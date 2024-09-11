import React,{useState} from "react";

// function toggle(){
  // boards[isSelected].selected = false;
  
  // }
  function Board(props) {
    let className = "board";
    if (props.selected) {
    className += " selected";
  }
  
  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selected, setIsSelected] = useState(0);
  const handleToggle = (event)=>{
    selected+1>=5 ? setIsSelected(0) : setIsSelected(selected+1);
  }
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
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
