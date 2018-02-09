import React, { Component } from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom';

import Users  from './users/users';
import Home  from './layout/home';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
        </main>
      </Router>
    );
  }
}

export default App;
