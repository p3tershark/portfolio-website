import React, { Component } from "react";

import TableBody from "./layouts/TableBody";
import TableHead from "./layouts/TableHead";
import TableFoot from "./layouts/TableFoot";

import MunchContextProvider from "../../../contexts/MunchContext";
import AddTreatForm from "./layouts/AddTreatForm";

import toolslBackground from "../../images/tools_background.jpeg";

class MunchCounter extends Component {
  render() {
    return (
      <div className="container text-center user-select-none">
        <img src={toolslBackground} alt="bg" className="bg" />

        <div className="d-flex align-items-center flex-column">
          <div className="p-1">
            <h2 className="text-center greeting p-3">The Mounch Counter</h2>
          </div>

          <div className="container">
            <MunchContextProvider>
              <table className="table table-responsive-md text-white">
                <TableHead />
                <TableBody />
                <TableFoot />
              </table>
              <AddTreatForm />
            </MunchContextProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default MunchCounter;
