import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Picture from './components/Picture';
import Photo from './components/Photo';
import Colors from './components/Colors/Colors';

import './App.css';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <h2>Welcome to React Router</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/picture'} className="nav-link">Picture</Link></li>
            <li><Link to={'/photo'} className="nav-link">Photo</Link></li>
            <li><Link to={'/colors'} className="nav-link">Colors</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/picture' component={Picture} />
            <Route exact path='/photo' component={Photo} />
            <Route exact path='/colors' component={Colors} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
