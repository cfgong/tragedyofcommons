import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Scene5() {
  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>
        Our simple fishing game was an example of the tragedy of commons. Because
         parties were repeatedly being selfish, overtime the lake became depleted.
         The fishing supply diminished and disappeared altogether. <br/>
        In the tragedy of commons, there is one shared resource among players.
        Players, as rational beings, each seek to maximize his personal gain.
        In our Common Lake example, each fisherman will consider the incurred
        utility of harvesting one additional fish. There is a both a positive
        and negative component. The positive utilty is the utility gained from
        acquiring the extra fish (nearly +1), while the negative component is
        the additional overfishing of one more animal. The effects of overfishing
        will be shared by all the fishermen, since Common Lake is a shared resource,
        therefore the negative effect will only be a fractional part of 1.
        Looking at the short run , and summing together these partial utilities,
        the fisherman can conclude that the best course of action is continually
        fish more animals. However, this is is also the action by the other rational fishermen. <br/>
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
               pathname: "/scene2",
               state: {
                 numFish: 7
               }
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

export default Scene5;
