import * as Redux from "redux";
import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION
} from "./const/practicingTypes";

import rootReducer from "./reducers/rootReducer";

export const defaultState = {
  modules: [
    { name: ADDITION, isEnabled: true, problemsTotal: 20, maximumSum: 100 },
    { name: SUBTRACTION, isEnabled: true, problemsTotal: 18, maximumMinuend: 120 },
    { name: MULTIPLICATION, isEnabled: true, problemsTotal: 15, maximumMultiplier: 12 }, 
    { name: DIVISION, isEnabled: true, problemsTotal: 10, maximumDivident: 144 }
  ]
};

const store = Redux.createStore(
  rootReducer,
  defaultState,
  Redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
