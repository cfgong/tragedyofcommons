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

class Round2Scene1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFish: this.props.location.state.totalFish
    };
    console.log("Number of fish: ", this.state.numFished);
    
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Scene 1</h1>
          <p>Another great year has passed in Commonville, and it is now fishing season again. There are now {this.state.totalFish} fishes in the pond. Once again, you can fish up to four schools of fish. Drawn by the allure of the delicious fish, more fishermen have come to town. Now there is enough fishermen to fish all the fish you don’t fish. </p>

          <div id="pond" style={divStyle}> </div>
          <Link
          to={{
            pathname: "/scene2",
            state: {
              numFished: 1,
              totalFish: this.state.totalFish
            }
          }}
        >
          <Button variant="contained" color="secondary">
            1 fish
          </Button>
        </Link>

        <Link
          to={{
            pathname: "/scene2",
            state: {
              numFished: 2,
              totalFish: this.state.totalFish
            }
          }}
        >
          <Button variant="contained" color="secondary">
            2 fish
          </Button>
        </Link>

        <Link
          to={{
            pathname: "/scene2",
            state: {
              numFished: 3,
              totalFish: this.state.totalFish
            }
          }}
        >
          <Button variant="contained" color="secondary">
            3 fish
          </Button>
        </Link>

        <Link
          to={{
            pathname: "/scene2",
            state: {
              numFished: 4,
              totalFish: this.state.totalFish
            }
          }}
        >
          <Button variant="contained" color="secondary">
            4 fish
          </Button>
        </Link>
        </header>
      </div>
    );
  }
}

export default Round2Scene1;
