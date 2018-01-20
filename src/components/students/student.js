import React from 'react';

const Student = (props) => {
  const { student } = props;

  return (
    <tr>
      <td> {student.firstname} </td>
      <td> {student.lastname} </td>
      <td> {student.email} </td>
      <td> {student.age} </td>
    </tr>
  );
}

export default Student;
