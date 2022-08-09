import { useContext } from "react";
import { RootContext } from "../contexts";

export const useRoot = () => {
  const { rootState, rootDispatch, user, setUser } = useContext(RootContext);

  return { rootState, rootDispatch, user, setUser };
};
