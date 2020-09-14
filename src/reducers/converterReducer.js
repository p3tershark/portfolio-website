export const converterReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHECK":
      let numOnly = /^[0-9]*$/;
      if (numOnly.test(action.value) || action.value === "") {
        return [
          state[0],
          state[1],
          state[2],
          state[3],
          state[4],
          `${displayResult(state, action.value)} ${state[0] ? "kg" : "lbs"}`,
          { value: action.value },
        ];
      } else {
        return state;
      }

    case "SWAP_MEASSURES":
      let lbsToKg = state[0] ? false : true;
      return [
        lbsToKg,
        2.20462262,
        0.45359237,
        "Pounds to Kilogramms",
        "Kilogramms to Pounds",
        "_ _ _",
        { value: "" },
      ];

    default:
      return state;
  }
};

const displayResult = (state, num) => {
  if (state[0]) {
    return (num * state[2]).toFixed(2);
  } else {
    return (num * state[1]).toFixed(2);
  }
};
