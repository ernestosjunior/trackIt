import * as actions from "./actions";

export const rootInitialState = {
  habits: [],
  habitsToday: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "setHabits":
      return actions.setHabits(action.payload);
    case "setHabitsToday":
      return actions.setHabitsToday(action.payload);
    default:
      throw new Error();
  }
};
