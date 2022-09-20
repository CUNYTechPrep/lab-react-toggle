import React from "react";
//import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoardSwitcher numboards={5} />
    
  </React.StrictMode>
);
//numboards={5} changes the app to render 5 boards