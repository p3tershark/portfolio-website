import React, { useContext } from "react";
import { ConverterContext } from "../../../../contexts/ConverterContext";

const SwapButton = () => {
  const { dispatch } = useContext(ConverterContext);

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary m-2"
        onClick={() => {
          dispatch({ type: "SWAP_MEASSURES" });
        }}
      >
        Swap meassures
      </button>
    </div>
  );
};

export default SwapButton;
