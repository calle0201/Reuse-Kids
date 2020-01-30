import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, Prompt} from 'react-router-dom';

import './App.css';

import Header from './Header';
import Login from './Login';
import SportNav from './SportNav';
import Sell from './Sell';
import Home from './Home';
import Buy from './Buy';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Search from './Search';
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