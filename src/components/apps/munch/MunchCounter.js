import React, { Component } from "react";

import TableBody from "./layouts/TableBody";
import TableHead from "./layouts/TableHead";
import TableFoot from "./layouts/TableFoot";

import MunchContextProvider from "../../../contexts/MunchContext";
import AddTreatForm from "./layouts/AddTreatForm";

class MunchCounter extends Component {
  render() {
    let ImgPath =
      "https://images.pexels.com/photos/701455/pexels-photo-701455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    return (
      <div className="container text-center user-select-none">
        <img src={ImgPath} alt="bg" className="bg" />

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
