import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Channel from "./components/pages/Channel";
import Tools from "./components/pages/Tools";
import MunchCounter from "./components/apps/munch/MunchCounter";
import RandomButton from "./components/apps/randombutton/RandomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/channel" component={Channel} />
            <Route path="/tools" component={Tools} />
            <Route path="/tools/munchcounter" component={MunchCounter} />
            <Route path="/tools/randombutton" component={RandomButton} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
