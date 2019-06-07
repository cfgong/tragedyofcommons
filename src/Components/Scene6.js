import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import formula1 from "./formula1.png";
import formula2 from "./formula2.png";
import formula3 from "./formula3.png";

const divStyle = {
  width: '75%'
};

const imgStyle = {
  height: '50px',
  display: 'block',
  margin: '0 auto'
}

function Scene6() {
  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>
        Let us formalize this model now to demonstrate the positive and negative effects of
         increasing an extra fish. Let n be the number of fisherman, each able to choose the
          amount of fish they can fish. Let K be the total amount of fish available.
           Each player i = 1, …, n chooses the amount of fish to to fish. Let k<sub>i</sub> denote
           the amount fished by the i-th player. Then the amount of fish left in the pool,
            after all the fishermen have fished is: <br/>
            <img src={formula1} style={imgStyle}></img>
            For simplicity, let the utility functions be logarithms. Player i incurs a
            benefit equal to ln(k<sub>i</sub>) for fishing k<sub>i</sub> fish. Each player also enjoys an added
            benefit, from the remaining fish, sustaining the ecosystem. This gives us an
            additional benefit of: <br/>
            <img src={formula2} style={imgStyle}></img>
          Then, the value for each player for player i from fishing k<sub>i</sub> fish contingent on
          the actions of the other players is given by the utility function:
          <img src={formula3} style={imgStyle}></img>
          where k<sub>-i</sub> are the actions of all the other players.
           </p>
           </div>

           <Link
             to={{
               pathname: "/scene1",
               state: {}
             }}
           >
             <Button variant="contained" color="secondary">
               Play the Game Again
             </Button>
           </Link>
         </header>
       </div>
     );
}

export default Scene6;
