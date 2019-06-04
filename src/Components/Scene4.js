import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Scene4() {
  return (
    <div>
      <header className="App-header">
        <h1> Game Over </h1>
        <div style={divStyle}>
        <p> 
            The fishing season has ended. The other fisherman have fished as well.
        </p>
        <p>
        Unfortunately, you did not fish enough fish to feed your family. The game is now over. What’s worse was that after you left, more fisherman came to town. Because all the fisherman were greedy, Common Lake became overfished. There was not enough fish left in Common Lake for another season of fishing and the ecosystem of Common Lake was ruined. 
        </p>
        </div>
    
        <Link
          to={{
            pathname: "/",
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

export default Scene4;
