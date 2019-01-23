import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/index.css';
import './css/resultpage.css';
import './css/style.css';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/results' component={Results} />
            </div>
      </Router>
    );
  }
}

export default App;
