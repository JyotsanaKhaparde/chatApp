/***********************************************************************************
 *  Purpose         : App.js is main entry point of client side and for route component.
 *  @file           : App.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Registraion from './pages/registraion';
import Dashboard from './pages/dashboard';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');
socket.emit('connection');
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}></Route>
            <Route path="/registraion" component={Registraion}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
