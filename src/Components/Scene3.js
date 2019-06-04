import React from "react";

class Scene3 extends React.Component {
  componentDidMount() {
    const { numFish } = this.props.location.state;
    console.log("Number of fish: ", numFish);
  }
  render() {
    const { numFish } = this.props.location.state;
    return (
      <div>
        <header className="App-header">
          <h1>Scene 3</h1>
          <p>

            Here is where we show the ending you get depending on how much you
            fished!
          </p>
        </header>
      </div>
    );
  }
}

export default Scene3;
