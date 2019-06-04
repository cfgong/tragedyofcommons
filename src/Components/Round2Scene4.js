import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Round2Scene4() {
  return (
    <div>
      <header className="App-header">
        <h1> Game Over </h1>
        <div style={divStyle}>
        <p> 
        The fishing season has ended. Since you fished only one fish, you and your family starved. What’s worse is that the rest of the fisherman were selfish and harvested all the fish left in the pond. The lake has been overfished. Fishermen can no longer fish from Common Lake. 
        </p>
        </div>
    
        <Link
          to={{
            pathname: "/scene5",
            state: {}
          }}
        >
          <Button variant="contained" color="secondary">
            Continue to Tragedy of Commons Explanation
          </Button>
        </Link>
      </header>
    </div>
  );
}

export default Round2Scene4;
