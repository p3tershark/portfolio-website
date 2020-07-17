import nextId from "react-id-generator";

export const munchReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TREAT":
      return [
        ...state,
        {
          name: action.treat.name,
          amount: 0,
          calories: action.treat.calories,
          id: nextId(),
        },
      ];
    case "REMOVE_TREAT":
      return state.filter((treat) => treat.id !== action.id);
    case "INCREASE_AMOUNT":
      return state.map((treat) => {
        if (treat.id !== action.id) {
          return treat;
        } else {
          return {
            name: treat.name,
            amount: treat.amount + 1,
            calories: treat.calories,
            id: treat.id,
          };
        }
      });
    case "DECREASE_AMOUNT":
      return state.map((treat) => {
        if (treat.id !== action.id) {
          return treat;
        } else {
          return {
            name: treat.name,
            amount: treat.amount - 1,
            calories: treat.calories,
            id: treat.id,
          };
        }
      });
    default:
      return state;
  }
};
