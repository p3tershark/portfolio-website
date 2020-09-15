import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Videos from "./components/pages/Videos";
import Tools from "./components/pages/Tools";
import MunchCounter from "./components/apps/munch/MunchCounter";
import RandomButton from "./components/apps/randombutton/RandomButton";
import Measures from "./components/apps/measures/Measures";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/tools" component={Tools} />
            <Route exact path="/tools/munchcounter" component={MunchCounter} />
            <Route exact path="/tools/randombutton" component={RandomButton} />
            <Route exact path="/tools/measures" component={Measures} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
