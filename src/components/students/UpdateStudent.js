import React, { Component } from 'react';
import axios from 'axios';
import { map, omit, pick } from 'lodash';
import { withRouter, Redirect } from 'react-router-dom';

class UpdateStudent extends Component {
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

  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3000/students/detail/${id}`)
      .then(res => {
        this.setState(pick(res.data, [
          'firstname',
          'lastname',
          'email',
          'age',
        ]))
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value} );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    axios.post(
      `http://localhost:3000/students/update/${id}`,
      omit(this.state, ['redirect'])
    ).then(() => {
      this.setState({ redirect: true });
    });
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
        <input value={age} name='age' type='number' onChange={this.handleChange} /><br/>
        <button>submit</button>
      </form>
    );
  }
}

export default withRouter(UpdateStudent);
