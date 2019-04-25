import { ENABLE_MODULE } from "../const/actionTypes";

export const enableModule = (moduleName, enable) => ({
  type: ENABLE_MODULE,
  moduleName,
  enable
});
