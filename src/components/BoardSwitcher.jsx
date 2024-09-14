import React,{useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  // const [selected, setSelected] = useState(1);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  function handleClick (){
    setSelectedBoardIndex( (selectedBoardIndex + 1) % props.numBoards )
    
  }

  let boards = [];
  // for (let ii = 0; ii < props.numBoards; ii++) {
  //  let isSelected = selected === ii + 1
  //   boards.push(<Board index={ii} selected={isSelected} key={ii} />);
    
  for (let boardIndex = 0; boardIndex < props.numBoards; boardIndex++) {
    let isBoardSelected = selectedBoardIndex === boardIndex;
    boards.push(<Board index={boardIndex} selected = {isBoardSelected} key={boardIndex}/>)
  }
  return (
    <div>
      <div className="boards">{boards}</div>
      {/* <button onClick={()=>{setSelected(selected === boards.length? 1 : selected + 1); console.log(selected)}}>Toggle</button> */}
      <button onClick={handleClick}>Toggle</button> 
    </div>
  );
}

export default BoardSwitcher;
