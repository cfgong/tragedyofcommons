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
  width: '75%'
};

const linkStyle = {
  color: 'white'
}

const buttonStyle = {
  color: 'white'
}

const buttonRight = {
  marginLeft: '300px',
  marginTop: '20px'
}

const buttonLeft = {
  marginLeft: '50px',
  marginTop: '20px'
}

class Scene7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




componentDidMount() {
}

render() {
  var numFished_1 = 0;
  var numFished_2 = 0;
  var k = 10;


  function initializeSVG() {
    if (d3.select("svg")[0][0] == null) {
      var svg = d3
       .select("#pond")
       .append("svg")
       .attr({
         width: 1000,
         height: 300,
         border: "1px solid #ccc"
       });
       return svg;
    }
    return d3.select("svg");
  }

  function calculate(player) {
    var utilityScore = 0;
    if (player == 1) {
      utilityScore += Math.log(numFished_1);
      var addition = numFished_1 + numFished_2;
      var summation = Math.log(k - addition);
      return summation;
    }
    else {
      utilityScore += Math.log(numFished_2);
      var addition = numFished_1 + numFished_2;
      var summation = Math.log(k - addition);
      return summation;
    }
  }


  function changeUtility1() {
    if (numFished_1 + numFished_2 == 10) {
      return;
    }
    numFished_1++;
    var svg = initializeSVG();
    var utility = calculate(1);
    if (svg.select("#utilityScore1")[0][0] != null) {
      svg.select("#utilityScore1").remove();
    }
    if (svg.select("#fisher1")[0][0] == null) {
      svg
        .append("svg:image")
        .attr("xlink:href", fisherman_url_1)
        .attr("x", 200)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", 300)
        .attr("id", "fisher1");
    }
    if (svg.select("#fisher2")[0][0] == null) {
      svg
        .append("svg:image")
        .attr("xlink:href", fisherman_url_2)
        .attr("x", 700)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", 300)
        .attr("id", "fisher2");
    }
    svg
      .append("text")
      .attr("x", 10)
      .attr("y", 25)
      .text( function (d) { return "Number Fished: " + numFished_1 + " Utility Score: " + calculate(1).toFixed(2);})
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "white")
      .attr("id", "utilityScore1");
  }

  function changeUtility2() {
    if (numFished_1 + numFished_2 == 10) {
      return;
    }
    numFished_2++;
    var utility = calculate(2);
    var svg = initializeSVG();
    if (svg.select("#utilityScore2")[0][0] != null) {
      svg.select("#utilityScore2").remove();
    }
    if (svg.select("#fisher1")[0][0] == null) {
      svg
        .append("svg:image")
        .attr("xlink:href", fisherman_url_1)
        .attr("x", 200)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", 300)
        .attr("id", "fisher1");
    }
    if (svg.select("#fisher2")[0][0] == null) {
      svg
        .append("svg:image")
        .attr("xlink:href", fisherman_url_2)
        .attr("x", 700)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", 300)
        .attr("id", "fisher2");
    }

    svg
      .append("text")
      .attr("x", 630)
      .attr("y", 25)
      .text( function (d) { return "Number Fished: " + numFished_2 + " Utility Score: " + calculate(2).toFixed(2);})
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "white")
      .attr("id", "utilityScore2");
  }


  return (
    <div>
      <header className="App-header">
        <h1>Explanation of Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>
        This demonstrates both the positive and negative effect of fishing one more fish.
        The fisherman gains a positive utility of gaining one more fish, which incurs a
         negative effect of that commons from not having that extra benefit based the
         remaining fish left. Since this effect is based on the actions of all the
         fishermen, the negative effects of overfishing are also shared among the
         fishermen. Here, the social and private incentives differ. To avoid the
         tragic destruction of the fish ecosystem, all the fishermen must cooperate
         and reduce their collect fishing. However, a single fishermen has limited
         incentive to reduce their own fishing, because each fishermen’s harvest is
          only part of the problem. Each fishermen utilizes the common resource, but
           by over utilizing such a resource, he diminishes the utility that the
           other fishermen can get.
           <br/>
            <Button variant="contained" color="warning" onClick={changeUtility1} style={buttonLeft}>Harvest Another Fish For Player 1</Button>
            <Button variant="contained" color="warning" onClick={changeUtility2} style={buttonRight}>Harvest Another Fish For Player 2</Button>
           </p>
           </div>
           <div id="pond"> </div>

           <Link
             to={{
               pathname: "/scene1",
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

export default Scene7;
