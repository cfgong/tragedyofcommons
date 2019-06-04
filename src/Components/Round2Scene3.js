import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Round2Scene3() {
  return (
    <div>
      <header className="App-header">
        <h1> Game Over </h1>
        <div style={divStyle}>
        <p> 
        The fishing season has ended. The other fisherman have fished as well. The other fisherman were selfish and harvested all the fish left in the pond. Now there is not enough fish left in the lake to sustain the ecosystem. The lake has been overfished. You were hoping to settle your family down in the nice town of Commonville, but it looks like that will just not be possible anymore. Looks like you will have to pack up your bags and move your family elsewhere. Fishermen can no longer fish from Common Lake. 
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

export default Round2Scene3;
