import * as actions from "./actions";

export const rootInitialState = {
  habits: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "setHabits":
      return actions.setHabits(action.payload);
    default:
      throw new Error();
  }
};
