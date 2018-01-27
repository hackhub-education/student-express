import axios from 'axios';
import { omit } from 'lodash';

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_STUDENTS: 'FETCH_STUDENTS',
  ADD_STUDENT: 'ADD_STUDENT',
}

export const increment = {
  type: actionTypes.INCREMENT
};

export const decrement = {
  type: actionTypes.DECREMENT
}

export const fetchStudents = () => (dispatch, getState) => {
  axios.get('http://localhost:3000/students/all').then(
    res => {
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: actionTypes.FETCH_STUDENTS,
          payload: res.data,
        })
      }
    }
  )
}

export const addStudent = (values) => (dispatch, getState) => {
  return axios.post(
    'http://localhost:3000/students/add/json',
    omit(values, ['redirect'])
  ).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: actionTypes.ADD_STUDENT,
        payload: res.data,
      })
    }
  });
}
