import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, Prompt} from 'react-router-dom';


import './App.css';

import Header from './Header';
import Nav from './Nav';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
          <Nav />
          <Router />
        </div>
      </div>
       

    );
  }
}

export default App;