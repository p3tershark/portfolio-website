let startTime, endTime;
export const randomReducer = (state, action) => {
  switch (action.type) {
    case "SHUFFLE_BUTTONS":
      return state.map((data) => {
        if (data.buttons) {
          return { buttons: shuffleButtonsArray(data.buttons) };
        } else if (data.userNumber && data.userNumber === "Your number") {
          return { userNumber: `${action.num}` };
        } else if (data.userNumber) {
          return { userNumber: `${data.userNumber}${action.num}` };
        } else {
          return data;
        }
      });

    case "COMPARE_DATA":
      let uNum = action.state[1].userNumber;
      let tNum = action.state[2].targetNumber.toString();

      if (uNum.length <= tNum.length && !isNaN(parseInt(tNum))) {
        if (uNum.length === 1 && uNum[0] === tNum[0]) {
          startTime = Date.now();
        } else if (uNum === tNum) {
          endTime = Date.now();
          return [
            { buttons: action.state[0].buttons },
            { userNumber: `Your time: ${timeChecker(startTime, endTime)}` },
            { targetNumber: "You Won!" },
          ];
        } else if (uNum !== "Try again!") {
          for (let i = 0; i < uNum.length; i++) {
            if (uNum[i] !== tNum[i]) {
              return [
                { buttons: action.state[0].buttons },
                { userNumber: "Try again!" },
                { targetNumber: "You Lost! :(" },
              ];
            }
          }
        }
      }
      return action.state;

    case "NEW_GAME":
      return [
        { buttons: action.defaultState[0].buttons },
        { userNumber: action.defaultState[1].userNumber },
        { targetNumber: randomTargetNumber() },
      ];
    default:
      return state;
  }
};

// Functions used in reducers

const shuffleButtonsArray = (arr) => {
  let randomArray = randomArrayGenerator();
  const result = randomArray.map((el) => {
    return arr[el];
  });
  return result;
};

const randomArrayGenerator = () => {
  let randomArray = [];
  do {
    let num = Math.floor(Math.random() * 12);
    if (!randomArray.includes(num)) {
      randomArray.push(num);
    }
  } while (randomArray.length < 12);

  return randomArray;
};

const randomTargetNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

const timeChecker = (start, end) => {
  let interval = end - start;
  let seconds = Math.floor(interval / 1000);
  let hundreths = Math.floor((interval - seconds * 1000) / 10);

  return `${seconds < 10 ? (seconds = `0${seconds}`) : seconds}:${
    hundreths < 10 ? (hundreths = `0${hundreths}`) : hundreths
  } sec`;
};
