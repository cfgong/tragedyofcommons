import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as d3 from "d3-3";
import $ from "jquery";
import pond from "./pond.png";
import fish_url from "./fish2.png";
import fisherman_url from "./fisherman.png";

const divStyle = {
  width: '75%'
};

class Scene3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFished: this.props.location.state.numFished,
      totalFish: this.props.location.state.totalFish
    };
    console.log("Number of fish: ", this.state.numFished);


  }
  componentDidMount() {
    console.log("Number of fish: ", this.state.numFished);
  }
  render() {
    const { numFished } = this.props.location.state;

    return (
      <div>
        <header className="App-header">
          <h1>End of Fishing Season</h1>
          <div style={divStyle}>
          <p>
          The fishing season has ended. The other fisherman have fished as well.
          </p>
          <p>
          You have had a successful fishing season and fished {this.state.numFished} fishes. The other fishing parties have harvested the full amount they could, 4 fishes. Now there is a total of {this.state.totalFish - this.state.numFished - 4} fishes left.
          </p>
          </div>
          <Link
            to={{
              pathname: "/Round2Scene1",
              state: {
                totalFish: (this.state.totalFish - this.state.numFished - 4)*2
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

export default Scene3;
