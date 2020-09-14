import React, { createContext, useReducer } from "react";
import { converterReducer } from "../reducers/converterReducer";

export const ConverterContext = createContext();

const ConverterContextProvider = (props) => {
  const defaultState = [
    true,
    2.20462262,
    0.45359237,
    "Pounds to Kilogramms",
    "Kilogramms to Pounds",
    "_ _ _",
    { value: "" },
  ];

  const [basics, dispatch] = useReducer(converterReducer, defaultState);

  return (
    <ConverterContext.Provider value={{ basics, defaultState, dispatch }}>
      {props.children}
    </ConverterContext.Provider>
  );
};

export default ConverterContextProvider;
