import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divStyle = {
  width: '75%'
};

function Scene1() {
  return (
    <div>
      <header className="App-header">
        <h1>Let&#8217;s Play a Game! </h1>
        <div style={divStyle}>
        <p> You have recently moved you and your family to Commonville,
        a land that has recently experienced an influx of fisherman due
        to its delicious fish. This is now a booming fisherman town where all
        the families live off the fish provided in Common Lake. <br/>

        You have arrived just in time for fishing season, and all the fisherman
        are gearing up with their boats and fishnets. Currently there are ten
        schools of fish in Common Lake. Because you are an experienced fisherman,
        you can fish up to four schools. Keep in mind that you will be harvesting
        fish in the future and that you share the lake with other town people.
        The other fishing parties can also fish up to four schools of fish. <br/>

        If you fish one fish, you and your family die of starvation. <br/>
        If you fish two fish, you have enough food to feed your family. <br/>
        If you fish three fish, you have enough to eat and you can sell the extra fish for a profit. <br/>
        If you fish four fish, you can move your family into a larger house, and upgrade your fishing equipment.
        </p>
        </div>
        <p>Choose the number of fish to harvest: </p>

        <Link
          to={{
            pathname: "/scene2",
            state: {
              numFished: 1,
              totalFish: 10,
              round: 1
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
              totalFish: 10,
              round: 1
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
              totalFish: 10,
              round: 1
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
              totalFish: 10,
              round: 1
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
