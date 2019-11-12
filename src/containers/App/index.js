import React, {Component} from 'react';
import UserManagement from '../UserManagement'
import Reports from '../Reports';
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><a href="/#/usermanagement">User Management</a></li>
            <li><a href="/#/reports">Reports</a></li>
          </ul>
          <Route path="/usermanagement" component={UserManagement} />
          <Route path="/reports" component={Reports} />
        </div>
      </Router>
    );
  }
}

export default App;
