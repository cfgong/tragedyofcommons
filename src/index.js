import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Scene1 from "./Components/Scene1";
import Scene2 from "./Components/Scene2";
import Scene3 from "./Components/Scene3";
import Scene5 from "./Components/Scene5";
import OneFishBadEnd from "./Components/BadEndings/OneFishBadEnd";
import FourFishBadEnd from "./Components/BadEndings/FourFishBadEnd";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/scene1" component={Scene1} />
      <Route path="/scene2" component={Scene2} />
      <Route path="/scene3" component={Scene3} />
      <Route path="/scene5" component={Scene5} />
      <Route path="/OneFishBadEnd" component={OneFishBadEnd} />
      <Route path="/FourFishBadEnd" component={FourFishBadEnd} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
