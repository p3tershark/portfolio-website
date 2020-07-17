import React, { createContext, useReducer, useEffect } from "react";
import { munchReducer } from "../reducers/munchReducer";

export const MunchContext = createContext();

const MunchContextProvider = (props) => {
  const defaultTreats = [
    { name: "Choc Bar", amount: 0, calories: 220, id: 1 },
    { name: "Peanuts (25g)", amount: 0, calories: 150, id: 2 },
    { name: "Candy (each)", amount: 0, calories: 20, id: 3 },
    { name: "Biscuit (each)", amount: 0, calories: 70, id: 4 },
    { name: "Doughnut", amount: 0, calories: 205, id: 5 },
  ];

  const [treats, dispatch] = useReducer(munchReducer, defaultTreats, () => {
    const localData = localStorage.getItem("treats");
    return localData && localData.length > 3
      ? JSON.parse(localData)
      : defaultTreats;
  });

  useEffect(() => {
    localStorage.setItem("treats", JSON.stringify(treats));
  }, [treats]);

  return (
    <MunchContext.Provider value={{ treats, dispatch }}>
      {props.children}
    </MunchContext.Provider>
  );
};

export default MunchContextProvider;
