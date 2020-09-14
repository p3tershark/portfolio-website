import React, { Component } from "react";

import TheGrid from "./layouts/TheGrid";

import RandomContextProvider from "../../../contexts/RandomContext";

import toolslBackground from "../../images/tools_background.jpeg";

class RandomButton extends Component {
  render() {
    return (
      <div className="container text-center user-select-none">
        <img src={toolslBackground} alt="bg" className="bg" />

        <div className="d-flex align-items-center flex-column">
          <div className="p-1">
            <h3 className="text-center greeting p-2">The Random Button Game</h3>
          </div>

          <RandomContextProvider>
            <TheGrid />
          </RandomContextProvider>
        </div>
      </div>
    );
  }
}

export default RandomButton;
