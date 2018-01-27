import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import counter from './reducers/counter';
import students from './reducers/students';

const rootReducer = combineReducers({
  counter,
  students,
})

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk),
);

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

export default store;
