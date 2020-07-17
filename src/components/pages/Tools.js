import React from "react";
import { NavLink } from "react-router-dom";

const Tools = () => {
  let ImgPath =
    "https://images.pexels.com/photos/701455/pexels-photo-701455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div className="p-5 user-select-none">
      <img src={ImgPath} alt="bg" className="bg" />

      <div className="d-flex flex-wrap justify-content-center">
        <div className="container text-center m-1 w-75 tools">
          <h5 className="card-title text-left mt-2">The Munch Counter</h5>
          <p className="text-right pr-3">Count your extra calories</p>
          <small>
            This tool uses the local storage, so it keeps your inputs for you in
            your browser.
          </small>
          <NavLink
            to="/tools/munchcounter"
            className="btn btn-secondary mb-2 float-right"
          >
            Try now!
          </NavLink>
        </div>

        <div className="container text-center m-1 w-75 tools">
          <h5 className="card-title text-left mt-2">The Random Button Game</h5>
          <p className="text-right pr-3">A game for fun</p>
          <small>
            All you have to do is to input the target number using the keyboard
            on your screen...
          </small>
          <NavLink
            to="/tools/randombutton"
            className="btn btn-secondary mb-2 float-right"
          >
            Try now!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tools;
