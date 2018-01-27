import { createStore, combineReducers } from "redux";
import counter from './reducers/counter';
import students from './reducers/students';

const rootReducer = combineReducers({
  counter,
  students,
})

const store = createStore(rootReducer, {});

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

export default store;
