import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Registraion from './pages/registraion';
import Dashboard from './pages/dashboard';
class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}></Route>
            <Route path="/registraion" component={Registraion}></Route>
            <Route path = "/dashboard" component={Dashboard}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
