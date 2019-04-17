import * as Redux from 'redux';

//import rootReducer from './reducers/rootReducer';

export const defaultState = {};


const store = Redux.createStore(/*rootReducer*/null, defaultState, Redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;