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
        Looking at the short run, and summing together these partial utilities,
        the fisherman can conclude that the best course of action is continually
        fish more animals. However, this is is also the action by the other rational fishermen. <br/>
           </p>
           </div>

           <Link
             to={{
               pathname: "/scene6",
               state: {}
             }}
           >
             <Button variant="contained" color="secondary">
               Next
             </Button>
           </Link>
         </header>
       </div>
     );
}

export default Scene5;
