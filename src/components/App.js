import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import Students from './students';
import AddStudent from './students/AddStudent';
import UpdateStudent from './students/UpdateStudent';

class App extends Component {
  handleIncrement = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  handleDecrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }

  render(){
    const { counter } = this.props;
    return (
      <div>
        <div>Counter: { counter }</div>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <Router>
          <Switch>
            <Route exact path="/react" exact component={Students}/>
            <Route exact path="/react/student/add" exact component={AddStudent}/>
            <Route exact path="/react/student/:id/update" exact component={UpdateStudent}/>
            <Route render={() => (<div>404</div>)}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  ({ counter }) => ({ counter })
)(App);
