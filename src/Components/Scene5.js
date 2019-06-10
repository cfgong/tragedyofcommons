import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./lake1.png";
import fish_url from "./fish3.png";
import fisherman_url_1 from "./fisherman1.png";
import fisherman_url_2 from "./fisherman.png";

const divStyle = {
  width: '75%',
  marginTop: '-15px'
};

const linkStyle = {
  color: 'black'
}

class Scene5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




componentDidMount() {
}

render() {
  function initializeSVG() {
    if (d3.select("svg")[0][0] == null) {
      var svg = d3
       .select("#pond")
       .append("svg")
       .attr({
         width: 800,
         height: 500,
         border: "1px solid #ccc"
       });
       return svg;
    }
    return d3.select("svg");
  }


  function drawPond() {
    var svg = initializeSVG();
    svg
      .append("svg:image")
      .attr("xlink:href", pond)
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 800)
      .attr("height", 600);

      var fisherman_id = "#fisher1";
      if (svg.select(fisherman_id)[0][0] == null) {
        // Draw the fisherman
        svg
          .append("svg:image")
          .attr("xlink:href", fisherman_url_1)
          .attr("x", 200)
          .attr("y", 300)
          .attr("width", 100)
          .attr("height", 300)
          .attr("id", "fisher1");
      }

      fisherman_id = "#fisher2";
      if (svg.select(fisherman_id)[0][0] == null) {
        // Draw the fisherman
        svg
          .append("svg:image")
          .attr("xlink:href", fisherman_url_2)
          .attr("x", 600)
          .attr("y", 300)
          .attr("width", 100)
          .attr("height", 300)
          .attr("id", "fisher2");
      }


  }

  function drawPlayers() {
    var svg = initializeSVG();
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

  function goFish() {
    var svg = initializeSVG();
    var x_locations = [225, 700, 425, 350, 600, 550, 705, 500, 425, 300];
    var y_locations = [350, 320, 335, 300, 300, 375, 400, 300, 390, 375];
    var fisherman_id = "#fisher1";
    for (var i = 0; i < 10; i++) {
      var fish_id = "#fish" + i;
      var total_delay = 1500 * (i + 1) + 1500;
      if (svg.select(fish_id)[0][0] != null) {
        $(fish_id)
          .delay(1500 * i)
          .fadeOut(1500, function() {
            $(this).remove();
          });
        var xpos = "" + x_locations[i];
        var ypos = y_locations[i] - 100;
        var ypos_string = "" + ypos;
        $(fisherman_id).animate({ x: xpos, y: ypos_string }, 1500);
      }
    }
    $(fisherman_id).animate({ x: 200, y: 250 }, 1500);
  }

  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>

        <p><i>**Click on the underlined words in the order they appear to see our animation**</i> </p>
        <div style={divStyle}>
        <p>
        Our simple fishing game served to illustrate Tragedy of the Commons.
        The increased fishermen in the town results in increased fishing.
        The lake loses the ability to replenish itself, and the fish supply disappears,
         and families lose their source of livelihood. This tragedy arises from the
          conflict among <a href="#" onClick={drawPond} style={linkStyle}><b>individuals</b></a> with
          selfish interests sharing a <a href="#" onClick={drawPlayers} style={linkStyle}><b>scarce resource.</b></a> Here,
           multiple parties are sharing a common good, so their own decisions
           affect the group as a whole.
           <br/>
           In our fishing game example, each fisherman is a rational player so wants to maximize his own utility,
           so will fish more whenever possible. (Even if you weren’t completely selfish in your fishing decisions,
              the other fishermen were). However, each additional fish fished degrades the quality of Common Lake,
               and the reduces the number of fish available in the next fishing season. In a selfish situation,
               all fishermen would seek to <a href="#" onClick={goFish} style={linkStyle}><b>maximize his own harvest of fish.</b></a>
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
