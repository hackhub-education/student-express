import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Apollo from './apollo';
import { ApolloProvider } from 'react-apollo';
import StudentsList from './studentsList';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Apollo}>
        <StudentsList />
      </ApolloProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);