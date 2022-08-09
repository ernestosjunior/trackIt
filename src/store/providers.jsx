import React, { useReducer, useState } from "react";
import { RootContext } from "./contexts";
import { rootInitialState, rootReducer } from "./root/reducer";

export const RootProvider = ({ children }) => {
  const [rootState, rootDispatch] = useReducer(rootReducer, rootInitialState);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );

  return (
    <RootContext.Provider value={{ rootState, rootDispatch, user, setUser }}>
      {children}
    </RootContext.Provider>
  );
};
