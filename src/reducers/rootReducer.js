import {
  ENABLE_MODULE,
  CHANGE_TOTAL,
  CHANGE_MAXIMUM_SUM,
  CHANGE_MAXIMUM_MINUEND,
  CHANGE_MAXIMUM_MULTIPLIER,
  CHANGE_MAXIMUM_DIVIDENT,
  CHANGE_MODE
} from "../const/actionTypes";

import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from "../const/practicingTypes";

import { SETTINGS, PRACTICING } from "../const/modes";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ENABLE_MODULE:
      return enableModule(state, action);

    case CHANGE_TOTAL:
      return changeTotal(state, action);

    case CHANGE_MAXIMUM_SUM:
      return changeMaximumSum(state, action);

    case CHANGE_MAXIMUM_MINUEND:
      return changeMaximumMinuend(state, action);

    case CHANGE_MAXIMUM_MULTIPLIER:
      return changeMaximumMultiplier(state, action);

    case CHANGE_MAXIMUM_DIVIDENT:
      return changeMaximumDivident(state, action);

    case CHANGE_MODE:
      return changeMode(state);

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

function changeMaximumMinuend(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === SUBTRACTION);
  if (module == null) {
    console.error(`Cannot find a module with the name ${SUBTRACTION}`);
    return state;
  }

  if (module.maximumMinuend === action.maximumMinuend) {
    return state;
  }

  module.maximumMinuend = action.maximumMinuend;
  return newState;
}

function changeMaximumMultiplier(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === MULTIPLICATION);
  if (module == null) {
    console.error(`Cannot find a module with the name ${MULTIPLICATION}`);
    return state;
  }

  if (module.maximumMultiplier === action.maximumMultiplier) {
    return state;
  }

  module.maximumMultiplier = action.maximumMultiplier;
  return newState;
}

function changeMaximumDivident(state, action) {
  let newState = Object.assign({}, state);

  let module = newState.modules.find(m => m.name === DIVISION);
  if (module == null) {
    console.error(`Cannot find a module with the name ${DIVISION}`);
    return state;
  }

  if (module.maximumDivident === action.maximumDivident) {
    return state;
  }

  module.maximumDivident = action.maximumDivident;
  return newState;
}

function changeMode(state) {
  let newState = Object.assign({}, state);
  newState.mode = newState.mode === SETTINGS ? PRACTICING : SETTINGS;
  return newState;
}

export default rootReducer;
