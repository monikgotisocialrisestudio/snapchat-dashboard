import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../index";

export const useAuthStore = () => {
  const authentication = useSelector(
    (state: RootState) => state.authentication
  );
  return useMemo(() => authentication, [authentication]);
};
