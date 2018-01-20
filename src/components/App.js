import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Students from './students';
import AddStudent from './students/AddStudent';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/react" exact component={Students}/>
          <Route exact path="/react/student/add" exact component={AddStudent}/>
          <Route render={() => (<div>404</div>)}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
