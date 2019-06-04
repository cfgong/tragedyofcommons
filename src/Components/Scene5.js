import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./lake1.png";
import fish_url from "./fish3.png";
import fisherman_url from "./fisherman1.png";

const divStyle = {
  width: '75%'
};

class Scene5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




componentDidMount() {
}

render() {
  function drawPond() {
    var svg = d3
      .select("#pond")
      .append("svg")
      .attr({
        width: 800,
        height: 500,
        border: "1px solid #ccc"
      });

    svg
      .append("svg:image")
      .attr("xlink:href", pond)
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 800)
      .attr("height", 600);

      var x_locations = [225, 700, 425, 350, 600, 550, 705, 500, 425, 300];
      var y_locations = [350, 320, 335, 300, 300, 375, 400, 300, 390, 375];
      const picture_height = 50;
      const picture_width = 50;
      var i = 0;


      // Start off by drawing a pond with 8 fish
      for (i = 0; i < 10; i++) {
        var fish_id = "fish" + i;
        svg
          .append("svg:image")
          .attr("xlink:href", fish_url)
          .attr("x", x_locations[i])
          .attr("y", y_locations[i])
          .attr("width", picture_width)
          .attr("height", picture_height)
          .attr("id", fish_id);
      }

  }

  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>

        Our simple fishing game was an example of the tragedy of commons. Because
         parties were repeatedly being selfish, overtime the lake became depleted.
         The fishing supply diminished and disappeared altogether. <br/>
        In the tragedy of commons, there is <a href="#" onClick={drawPond}>one shared resource</a>
         among players.
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
           <div id="pond"> </div>

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
}

export default Scene5;
