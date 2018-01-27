import React, { Component } from 'react';
import axios from 'axios';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Student from './Student';
import { fetchStudents } from '../actions';

class Students extends Component {
  constructor(props) {
    super(props);
    // this.state = { students: [] };
  }

  componentWillMount() {
    console.log(fetchStudents);
    this.props.dispatch(fetchStudents());
  }

  render(){
    // const { students } = this.state;
    const { students } = this.props;

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

export default connect(
  ({ students }) => ({ students })
)(Students);
