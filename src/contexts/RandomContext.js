import React, { createContext, useReducer, useEffect } from "react";
import { randomReducer } from "../reducers/randomReducer";

export const RandomContext = createContext();

const RandomContextProvider = (props) => {
  const defaultState = [
    {
      buttons: [
        { value: 0, id: 0 },
        { value: 1, id: 1 },
        { value: 2, id: 2 },
        { value: 3, id: 3 },
        { value: 4, id: 4 },
        { value: 5, id: 5 },
        { value: 6, id: 6 },
        { value: 7, id: 7 },
        { value: 8, id: 8 },
        { value: 9, id: 9 },
        { value: " # ", id: 11 },
        { value: " * ", id: 12 },
      ],
    },
    { userNumber: "Your number" },
    { targetNumber: "The Target" },
  ];
  const [theKeys, dispatch] = useReducer(randomReducer, defaultState);

  useEffect(() => {
    dispatch({ type: "COMPARE_DATA", state: theKeys });
  }, [theKeys]);

  return (
    <RandomContext.Provider value={{ theKeys, defaultState, dispatch }}>
      {props.children}
    </RandomContext.Provider>
  );
};

export default RandomContextProvider;
