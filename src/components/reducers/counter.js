import { actionTypes } from '../actions';

const initialValues = 0;

const counter = (state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
