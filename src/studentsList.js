import React from 'react';
import Apollo from './apollo';
import {
  graphql,
} from 'react-apollo';
import { studentsQuery } from './queries';

const StudentsList = ({ data: { loading, error, students }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => <tr key={student._id}>
          <td>{student.firstname}</td>
          <td>{student.lastname}</td>
          <td>{student.email}</td>
          <td>{student.age}</td>
        </tr>)}
      </tbody>
    </table>
  );
}

const StudentsListWithData = graphql(studentsQuery)(StudentsList);

export default StudentsListWithData;