import React, { useContext } from "react";
import { RandomContext } from "../../../../contexts/RandomContext";

const Button = ({ theKey, isDisabled }) => {
  const { dispatch } = useContext(RandomContext);

  return isDisabled ? (
    <button
      className="bnt btn-light rdbutton"
      onClick={() => {
        dispatch({ type: "SHUFFLE_BUTTONS", num: theKey.value });
      }}
    >
      {theKey.value}
    </button>
  ) : (
    <button
      disabled
      className="bnt btn-light rdbutton"
      onClick={() => {
        dispatch({ type: "SHUFFLE_BUTTONS", num: theKey.value });
      }}
    >
      {theKey.value}
    </button>
  );
};

export default Button;
