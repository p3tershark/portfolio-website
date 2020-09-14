import React from "react";

import Input from "./Input";
import Output from "./Output";
import ActualMeassure from "./ActualMeassure";
import SwapButton from "./SwapButton";

const TheUi = () => {
  return (
    <div className="d-flex align-items-center flex-column theui">
      <ActualMeassure />
      <Input />
      <Output />
      <SwapButton />
    </div>
  );
};

export default TheUi;
