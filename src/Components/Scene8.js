import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./lake1.png";
import fish_url from "./fish3.png";
import fisherman_url_1 from "./fisherman1.png";
import fisherman_url_2 from "./fisherman.png";
import formula4 from "./formula4.png";
import formula5 from "./formula5.png";
import formula6 from "./formula6.png";
import formula7 from "./formula7.png";
import formula12 from "./formula12.png";
import formula13 from "./formula13.png";

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
  margin: 'auto',
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

class Scene8 extends React.Component {
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
        The question now arises: is there is a solution to avoid this tragedy? <br/>
	   To find this solution, we must first define the idea of the Nash equilibrium.
     This is the solution where an individual maximizes their personal good (value function)
      for all actions of the other players. The Nash equilibrium is the solution that
      is optimal for all players, where each player is doing the best he possibly can
       given the choices of the other players. Then, no player has an incentive to deviate
        from his choose strategy given the strategy of the other players.
        <ol>There are three steps:
        <li> Player 1 finds the choices that maximizes his value function given every
        possible action combination of the other n-1 players. This is the maximum point
         of the value function of player 1 and will be a function of the actions of the
         other parties. </li>
         <li> Repeat step 1 for all N players. </li>
         <li> There are n equations here with n unknowns;
         the intersection point is the Nash equilibrium. </li>
         </ol>
           <br/>
           Following this iterative procedure, we can come up with a process to find a Nash equilibrium
           to tack the Tragedy of the Commons.<br/>
           To find the maximum point, we can take the first order derivative of
           the maximum function. <br/>This point is:
           <img src={formula4} style={imgStyle}></img>
           For n players, we can construct a linear system: <br/>
           <img src={formula5} style={imgStyle2}></img>
           By solving the linear system, we get that the solution is: <br/>
           <img src={formula6} style={imgStyle2}></img>
           This means that the <b> optimal amount for each player to fish is the total number of
           fish available divided by the number of players plus one </b>. The plus one comes
           from the indirect impact of a player’s consumption. <br/>
            The total amount of fish consumed is: <br/>
            <img src={formula7} style={imgStyle}></img>
            The payout or utility gained for each individual player for fishing <img src={formula13} style={imgStyle3}></img> is:
            <img src={formula12} style={imgStyle}></img>

           </p>
           </div>
           <div id="pond"> </div>

           <Link
             to={{
               pathname: "/scene9",
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

export default Scene8;
