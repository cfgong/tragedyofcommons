import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./pond.png";
import fish_url from "./fish2.png";
import fisherman_url from "./fisherman.png";

const divStyle = {
  width: '50%',
  margin: '0 auto'
};

class Scene2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFished: this.props.location.state.numFished,
      totalFish: this.props.location.state.totalFish,
      round: this.props.location.state.round
    };
    console.log("Number of fish: ", this.state.numFished);
    
   
  }


  drawPond() {
    var svg = d3
      .select("#pond")
      .append("svg")
      .attr({
        width: 600,
        height: 400,
        border: "1px solid #ccc"
      });

    svg
      .append("svg:image")
      .attr("xlink:href", pond)
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 600)
      .attr("height", 300);

    const x_locations = [120, 250, 90, 475, 370, 360, 275, 175];
    const y_locations = [175, 175, 100, 175, 220, 120, 90, 120];
    const picture_height = 50;
    const picture_width = 50;
    var i = 0;

    console.log("There are ", this.state.numFish, " fish left ");

    // Start off by drawing a pond with 8 fish
    for (i = 0; i < 8; i++) {
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

    // The number of fish the fisherman should remove
    const n = this.state.numFished;
    const maxFish = this.state.totalFish;

    var fisherman_id = "#fisher";
    if (svg.select(fisherman_id)[0][0] == null) {
      // Draw the fisherman
      svg
        .append("svg:image")
        .attr("xlink:href", fisherman_url)
        .attr("x", 700)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", 300)
        .attr("id", "fisher");
    }
    var i;
    var numRemoved = 0;
    for (i = 0; i < maxFish; i++) {
      if (numRemoved === n) {
        break;
      }
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
        numRemoved++;
      }
    }
    if (numRemoved !== n) {
      alert("Error: Not Enough Fish to Remove");
    }
  }

  componentDidMount() {
    switch(this.state.round){
      case 1:
          if (this.state.numFished == 1){
            this.setState({
              pathname: "/scene4"
            });
          } else {
            this.setState({
              pathname: "/scene3"
            });
          }
          break;
      case 2:
      default:
          if (this.state.numFished == 1){
            this.setState({
              pathname: "/round2scene4"
            });
          } else {
            this.setState({
              pathname: "/round2scene3"
            });
          }
          break;

    }
    console.log("the pathname is", this.state.pathname);
    this.drawPond();
    console.log("Drew the pond!");
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Scene 2</h1>
          <p>You have fished {this.state.numFished} fish.</p>
          <p>There are now {this.state.totalFish - this.state.numFished} fishes left</p>

          <div id="pond" style={divStyle}> </div>
          <Link
            to={{
              pathname: this.state.pathname,
              state: {
                numFished: this.state.numFished,
                totalFish: this.state.totalFish
              }
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

export default Scene2;
