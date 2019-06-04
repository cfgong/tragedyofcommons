import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Scene6() {
  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>
        In the Common Lake fishing example, the increased fishermen in the town
        results in increased fishing. The lake loses the ability to replenish
        itself, and the fish supply disappears, and families lose their source
         of livelihood. Here, the social and private incentives differ.
         To avoid the tragic destruction of the fish ecosystem, all the fishermen
         must cooperate and reduce their collect fishing. However,
         a single fishermen has limited incentive to reduce their own fishing,
          because each fishermen’s harvest is only part of the problem.
          Each fishermen utiltizes the common resource, but by overutilizing such a resource,
          he diminishes the utility that the other fishermen can get. <br/>
          The town could have implemented the problem in various ways.
          This means regulating the number of fish, limit the number of fishing
           boat permits, divide up the fishing water, etc.
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
