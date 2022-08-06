import { useContext } from "react";
import { RootContext } from "../contexts";

export const useRoot = () => {
  const { rootState, rootDispatch } = useContext(RootContext);

  return { rootState, rootDispatch };
};
