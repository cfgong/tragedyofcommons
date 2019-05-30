import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Scene2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFish: this.props.location.state
    };
    console.log("Number of fish: ", this.state.numFish);
  }

  render() {
    const { numFish } = this.state.numFish;
    return (
      <div>
        <header className="App-header">
          <h1>Scene 2</h1>
          <p>You have fished {numFish} fishes.</p>
          <p> Here is where we show the fisherman animation</p>

          <Link
            to={{
              pathname: "/scene3",
              state: {
                numFish: 3
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
