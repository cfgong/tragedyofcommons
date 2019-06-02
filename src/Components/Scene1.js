import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Scene1() {
  return (
    <div>
      <header className="App-header">
        <h1>Scene 1</h1>
        <p>Choose the number of fish: </p>

        <Link
          to={{
            pathname: "/OneFishBadEnd",
            state: {
              numFish: 1
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
              numFish: 2
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
              numFish: 3
            }
          }}
        >
          <Button variant="contained" color="secondary">
            3 fish
          </Button>
        </Link>

        <Link
          to={{
            pathname: "/FourFishBadEnd",
            state: {
              numFish: 4
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

export default Scene1;
