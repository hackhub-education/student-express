import { actionTypes } from '../actions';

const initialValues = [];

const students = (state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STUDENTS:
      return [
        { _id: 0, firstname: 'andy', lastname: 'chen', email: 'a@a.com', age: 22 },
        { _id: 1, firstname: 'ken', lastname: 'wu', email: 'b@b.com', age: 23 },
      ]
    case actionTypes.ADD_STUDENT:
      return [
        ...state,
        { _id: 2, firstname: 'judy', lastname: 'wong', email: 'c@c.com', age: 22 }
      ]
    default:
      return state;
  }
};

export default students;
