import * as actions from "./actions";

export const rootInitialState = {
  habits: [],
  token: (JSON.parse(window.localStorage.getItem("user")) || { token: "" })
    .token,
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "setHabits":
      return actions.setHabits(action.payload);
    default:
      throw new Error();
  }
};
