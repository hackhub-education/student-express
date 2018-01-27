import React from 'react';
import { Link } from 'react-router-dom';


const Student = (props) => {
  const { student } = props;

  return (
    <tr>
      <td>
        <Link to={`/react/student/${student._id}/update`}>
          {student.firstname}
        </Link>
      </td>
      <td> {student.lastname} </td>
      <td> {student.email} </td>
      <td> {student.age} </td>
    </tr>
  );
}

export default Student;
