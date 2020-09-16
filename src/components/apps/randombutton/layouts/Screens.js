import React, { useContext } from "react";
import { RandomContext } from "../../../../contexts/RandomContext";

const Screens = () => {
  const { theKeys } = useContext(RandomContext);

  return (
    <div className="container user-select-none">
      <div className="mb-2 pt-2 pb-1 screen">
        <h3 className="text-danger font-weight-bold">
          {theKeys[2].targetNumber}
        </h3>
      </div>
      <div className="mb-2 pt-2 pb-1 screen">
        <h3 className="text-dark font-weight-bold" placeholder="your number">
          {theKeys[1].userNumber}
        </h3>
      </div>
    </div>
  );
};

export default Screens;
