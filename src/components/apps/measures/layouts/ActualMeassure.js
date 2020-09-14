import React, { useContext } from "react";
import { ConverterContext } from "../../../../contexts/ConverterContext";

const ActualMeassure = () => {
  const { basics } = useContext(ConverterContext);
  const text1 = basics[0] ? basics[3] : basics[4];
  return (
    <div>
      <h4>Convert</h4>
      <h4>{text1}</h4>
    </div>
  );
};

export default ActualMeassure;
