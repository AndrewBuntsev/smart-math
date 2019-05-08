import { CHANGE_MAXIMUM_MULTIPLIER } from "../const/actionTypes";

export const changeMaximumMultiplier = maximumMultiplier => ({
  type: CHANGE_MAXIMUM_MULTIPLIER,
  maximumMultiplier
});
