import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SpinningCube from './SpinningCube.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount(){
    AOS.init({duration: 1500});
  }
  render() {
    return (
      <Router>
      <div data-aos="flip-left" className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Perry&#39;s Sick Ass Website</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2> Home</h2>
    </div>
    );
}

function About() {
  return <SpinningCube/>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
