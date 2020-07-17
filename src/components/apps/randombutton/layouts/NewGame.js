import React, { useContext } from "react";
import { RandomContext } from "../../../../contexts/RandomContext";

const NewGame = () => {
  const { dispatch, defaultState } = useContext(RandomContext);
  return (
    <button
      className="btn btn-danger px-3 pt-2 mt-4 w-100"
      onClick={() => {
        dispatch({ type: "NEW_GAME", defaultState });
      }}
    >
      <h4>New Game</h4>
    </button>
  );
};

export default NewGame;
