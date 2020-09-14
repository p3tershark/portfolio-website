import React, { useContext } from "react";
import { ConverterContext } from "../../../../contexts/ConverterContext";

const Output = () => {
  const { basics } = useContext(ConverterContext);
  const result = basics[5];
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Output;
