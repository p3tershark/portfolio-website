import React from "react";

import Buttons from "./Buttons";
import Screens from "./Screens";
import NewGame from "./NewGame";

const TheGrid = () => {
  return (
    <div className="container rdgrid">
      <Screens />
      <Buttons />
      <NewGame />
    </div>
  );
};

export default TheGrid;
