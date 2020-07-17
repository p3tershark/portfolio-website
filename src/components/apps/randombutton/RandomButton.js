import React, { Component } from "react";

import TheGrid from "./layouts/TheGrid";

import RandomContextProvider from "../../../contexts/RandomContext";

class RandomButton extends Component {
  render() {
    let ImgPath =
      "https://images.pexels.com/photos/701455/pexels-photo-701455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    return (
      <div className="container text-center user-select-none">
        <img src={ImgPath} alt="bg" className="bg" />

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
