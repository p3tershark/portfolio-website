import React from "react";
import toolslBackground from "../../images/tools_background.jpeg";
import TheUi from "./layouts/TheUi";
import ConverterContextProvider from "../../../contexts/ConverterContext";

const Measures = () => {
  return (
    <div className="container text-center user-select-none">
      <img src={toolslBackground} alt="background" className="bg" />
      <div className="d-flex align-items-center flex-column">
        <div className="p-1">
          <h3 className="text-center greeting p-2 px-5">Meassures</h3>
        </div>
        <ConverterContextProvider>
          <TheUi />
        </ConverterContextProvider>
      </div>
    </div>
  );
};

export default Measures;
