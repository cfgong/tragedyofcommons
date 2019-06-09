import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tragedy of Commons</h1>
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
