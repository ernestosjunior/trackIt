import React, { useReducer } from "react";
import { RootContext } from "./contexts";
import { rootInitialState, rootReducer } from "./root/reducer";

export const RootProvider = ({ children }) => {
  const [rootState, rootDispatch] = useReducer(rootReducer, rootInitialState);
  return (
    <RootContext.Provider value={{ rootState, rootDispatch }}>
      {children}
    </RootContext.Provider>
  );
};
