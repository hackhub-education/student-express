import React, { Component } from 'react';
import axios from 'axios';
import { map, omit } from 'lodash';
import { Redirect } from 'react-router-dom';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      age: 0,
      redirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value} );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(omit(this.state, ['redirect']));

    axios.post(
      'http://localhost:3000/students/add',
      omit(this.state, ['redirect'])
    );
    this.setState({ redirect: true });
  }

  render(){
    const { redirect, firstname, lastname, email, age } = this.state;

    if (redirect) { return <Redirect to="/react" />; }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>First name</label><br/>
        <input value={firstname} name='firstname' type='text' onChange={this.handleChange} /><br/>
        <label>Last name</label><br/>
        <input value={lastname} name='lastname' type='text' onChange={this.handleChange} /><br/>
        <label>Email</label><br/>
        <input value={email} name='email' type='email' onChange={this.handleChange} /><br/>
        <label>Age</label><br/>
        <input value={age} name='age' type='age' onChange={this.handleChange} /><br/>
        <button>submit</button>
      </form>
    );
  }
}

export default AddStudent;
