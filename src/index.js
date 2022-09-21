import React from "react"; 

import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  Counter()
); 

function Counter() { 

  
  return (<React.StrictMode>
    <BoardSwitcher numBoards={5} />
  </React.StrictMode>)
}
