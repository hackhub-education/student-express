import { actionTypes } from '../actions';

const initialValues = [];

const students = (state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STUDENTS:
      return action.payload;
    case actionTypes.ADD_STUDENT:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state;
  }
};

export default students;
