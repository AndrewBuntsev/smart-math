import {
  ENABLE_MODULE,
  CHANGE_TOTAL,
  CHANGE_MAXIMUM_SUM
} from "../const/actionTypes";
import { ADDITION } from "../const/practicingTypes";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ENABLE_MODULE:
      return enableModule(state, action);

    case CHANGE_TOTAL:
      return changeTotal(state, action);

    case CHANGE_MAXIMUM_SUM:
      return changeMaximumSum(state, action);

    default:
      return state;
  }
};

function enableModule(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === action.moduleName);
  if (module == null) {
    console.error(`Cannot find a module with the name ${action.moduleName}`);
    return state;
  }

  if (module.isEnabled === action.enable) {
    return state;
  }

  module.isEnabled = action.enable;
  return newState;
}

function changeTotal(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === action.moduleName);
  if (module == null) {
    console.error(`Cannot find a module with the name ${action.moduleName}`);
    return state;
  }

  if (module.problemsTotal === action.problemsTotal) {
    return state;
  }

  module.problemsTotal = action.problemsTotal;
  return newState;
}

function changeMaximumSum(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === ADDITION);
  if (module == null) {
    console.error(`Cannot find a module with the name ${ADDITION}`);
    return state;
  }

  if (module.maximumSum === action.maximumSum) {
    return state;
  }

  module.maximumSum = action.maximumSum;
  return newState;
}

export default rootReducer;
