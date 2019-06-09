import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Scene1 from "./Components/Scene1";
import Scene2 from "./Components/Scene2";
import Scene3 from "./Components/Scene3";
import Scene4 from "./Components/Scene4";
import Scene5 from "./Components/Scene5";
import Scene6 from "./Components/Scene6";
import Scene7 from "./Components/Scene7";
import Scene8 from "./Components/Scene8";
import Scene9 from "./Components/Scene9";
import Scene10 from "./Components/Scene10";
import Round2Scene1 from "./Components/Round2Scene1";
import Round2Scene3 from "./Components/Round2Scene3";
import Round2Scene4 from "./Components/Round2Scene4";
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
      <Route path="/scene4" component={Scene4} />
      <Route path="/scene5" component={Scene5} />
      <Route path="/scene6" component={Scene6} />
      <Route path="/scene7" component={Scene7} />
      <Route path="/scene8" component={Scene8} />
      <Route path="/scene9" component={Scene9} />
      <Route path="/scene10" component={Scene10} />
      <Route path="/round2scene1" component={Round2Scene1} />
      <Route path="/round2scene3" component={Round2Scene3} />
      <Route path="/round2scene4" component={Round2Scene4} />
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
