import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class OneFishBadEnd extends React.Component {
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
          <h1>
            Bad End! You haven't fished enough and your family starved to dead
          </h1>

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

export default OneFishBadEnd;
