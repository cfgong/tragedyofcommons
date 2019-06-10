import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";

import fisherman_url_1 from "./fisherman1.png";
import fisherman_url_2 from "./fisherman.png";
import fish from "./fish3.png";

const divStyle = {
  width: '75%'
};
const imageStyle = {
  height: "100px",
  padding: "10px",
  float: "left"
};

const imageStyle2 = {
  height: "100px",
  padding: "10px",
  float: "left",
  transform: "scaleX(-1)"
};

class Scene10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

componentDidMount() {
}

render() {


  return (
    <div>
      <header className="App-header">
      <span>
        <img src={fisherman_url_1} style = {imageStyle}></img>
        <img src={fish} style = {imageStyle}></img>
        <img src={fisherman_url_2} style = {imageStyle2}></img>
      </span>
        <h1>In the Real World</h1>
        <div style={divStyle}>
        <p>
        Since not all fishermen are well versed in game theory, the
        Commonville Council could have implemented a solution to directly target
        the overfishing problem and circumvent the tragedy. This would involve
         limiting the amount of fish that could be fished. This could manifest
         as limiting the number of fishing boat permits, limiting the fishing
          period, or imposing taxes on selling fish.
           </p>
           </div>
         </header>
       </div>
     );
}
}

export default Scene10;
