import { CHANGE_TOTAL } from "../const/actionTypes";

export const changeTotal = (moduleName, problemsTotal) => ({
  type: CHANGE_TOTAL,
  moduleName,
  problemsTotal
});
