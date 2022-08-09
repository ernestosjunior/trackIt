import React, { useReducer, useState } from "react";
import { useLocalStorage } from "react-use";
import { RootContext } from "./contexts";
import { rootInitialState, rootReducer } from "./root/reducer";

export const RootProvider = ({ children }) => {
  const [rootState, rootDispatch] = useReducer(rootReducer, rootInitialState);
  const [user, setUser, removeUser] = useLocalStorage("user", {});

  return (
    <RootContext.Provider
      value={{ rootState, rootDispatch, user, setUser, removeUser }}
    >
      {children}
    </RootContext.Provider>
  );
};
