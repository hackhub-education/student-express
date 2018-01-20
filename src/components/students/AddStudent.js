import React, { Component } from 'react';
import axios from 'axios';
import { map } from 'lodash';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      age: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call api
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First name</label>
        <input type='text' />
        <label>Last name</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Age</label>
        <input type='number' />
      </form>
    );
  }
}

export default AddStudent;
