import React, { useContext } from "react";
import { ConverterContext } from "../../../../contexts/ConverterContext";

const Input = () => {
  const { basics, dispatch } = useContext(ConverterContext);
  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="numberinput"
          placeholder="Enter the amount here"
          value={basics[6].value}
          onChange={(event) => {
            dispatch({ type: "INPUT_CHECK", value: event.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Input;
