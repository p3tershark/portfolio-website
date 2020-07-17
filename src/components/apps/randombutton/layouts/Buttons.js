import React, { useContext } from "react";
import { RandomContext } from "../../../../contexts/RandomContext";

import Button from "./Button";

const Buttons = () => {
  const { theKeys } = useContext(RandomContext);
  const isDisabled = !isNaN(parseInt(theKeys[2].targetNumber));

  return (
    <div>
      {theKeys[0].buttons.map((theKey) => {
        return (
          <Button theKey={theKey} key={theKey.id} isDisabled={isDisabled} />
        );
      })}
    </div>
  );
};

export default Buttons;
