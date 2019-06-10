import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import fisherman_url_1 from "./Components/fisherman1.png";
import fisherman_url_2 from "./Components/fisherman.png";
import fish from "./Components/fish3.png";


const imageStyle = {
  height: "100px",
  padding: "10px",
  float: "left"
};

const imageStyle2 = {
  height: "100px",
  padding: "10px",
  float: "left",
  transform: "scaleX(-1)"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span>
        <img src={fisherman_url_1} style = {imageStyle}></img>
        <img src={fish} style = {imageStyle}></img>
        <img src={fisherman_url_2} style = {imageStyle2}></img>
      </span>
      
        <h1>The Tragedy of Commons </h1>
        <Link to="/scene1">
          <Button variant="contained" color="primary">
            Start
          </Button>
        </Link>
      </header>
    </div>
  );
}

export default App;
