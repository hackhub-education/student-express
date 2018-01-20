import React, { Component } from 'react';
import axios from 'axios';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

import Student from './Student';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/students/all')
      .then(res => {
        this.setState({ students: res.data });
      });
  }

  render(){
    const { students } = this.state;

    if (!students.length) return null;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> firstname </th>
              <th> lastname </th>
              <th> email </th>
              <th> age </th>
            </tr>
          </thead>
          <tbody>
            { map(students, s => {
              return (
                <Student key={s._id} student={s} />
              )
            }) }
          </tbody>
        </table>

        <Link to='/react/student/add'>Add student</Link>
      </div>
    );
  }
}

export default Students;
