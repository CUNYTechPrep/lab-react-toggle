import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//switch from 3 -> 5 boards
//BoardSwitcher allows for toggle button. if you give it a specific amount it 
//will create the boxes
root.render(
  <React.StrictMode>
    <BoardSwitcher numBoards={5} />
  </React.StrictMode>
);
