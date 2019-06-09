import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./lake1.png";
import fish_url from "./fish3.png";
import fisherman_url_1 from "./fisherman1.png";
import fisherman_url_2 from "./fisherman.png";
import formula8 from "./formula8.png";
import formula9 from "./formula9.png";
import formula10 from "./formula10.png";
import formula11 from "./formula11.png";
import formula14 from "./formula14.png";
import formula15 from "./formula15.png";

const divStyle = {
  width: '75%'
};

const imgStyle = {
  height: '50px',
  display: 'block',
  margin: 'auto',
  marginTop: '10px',
  marginBottom: '10px'
}

const imgStyle2 = {
  height: '100px',
  display: 'block',
  margin: '0 auto',
  marginTop: '10px',
  marginBottom: '10px'
}

const imgStyle3 = {
  height: '50px'
}

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

class Scene9 extends React.Component {
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
        <h1>Solution to the Tragedy of the Commons</h1>
        <div style={divStyle}>
        <p>
        However, the Nash equilibrium does not taken into account player cooperation.
        Each player still acts selfishly. What happens if players cooperate? Can we find
        a socially optimal equilibrium? This is known as the Pareto optimal. This
        is outcome where any deviation (to acquire extra benefit) from the strategy
         will result in a loss for someone else. <br/>
         The social welfare function w is the sum of all the value functions of the players. <br/>
         <img src={formula8} style={imgStyle2}></img>
         Taking the first-order conditions for the problem to maximize this function we get: <br/>
         <img src={formula9} style={imgStyle2}></img>
         or <br/>
         <img src={formula10} style={imgStyle2}></img>
         In all, this means that the Pareto optimal consumption of fish overall is equal to <img src={formula14} style={imgStyle3}></img> for n fishermen
         with each individual player fishing <img src={formula15} style={imgStyle3}></img>. <br/>
         The payout or utility gained for each individual player from fishing <img src={formula15} style={imgStyle3}></img> fish
         is: <br/>
         <img src={formula11} style={imgStyle}></img>
           </p>
           </div>
           <div id="pond"> </div>

           <Link
             to={{
               pathname: "/scene10",
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

export default Scene9;
