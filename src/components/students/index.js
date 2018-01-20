import React, { Component } from 'react';
import axios from 'axios';
import { map } from 'lodash';

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
      <table>
        <thead>
          <tr>
            <th> username </th>
            <th> firstname </th>
            <th> lastname </th>
            <th> email </th>
          </tr>
        </thead>
        <tbody>
          { map(students, s => {
            return (
              <tr key={s._id}>
                <td> {s.username} </td>
                <td> {s.firstname} </td>
                <td> {s.lastname} </td>
                <td> {s.email} </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    );
  }
}

export default Students;
