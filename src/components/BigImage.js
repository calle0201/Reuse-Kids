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


class BigImage extends Component {

  componentDidMount() {
    console.log('stor bild');
    this.mounted = true;
    document.documentElement.addEventListener("keydown", this.onKeyDown.bind(this));
  }

    goToImage() {
        console.log('Bild');
    }

    render() {
    return (
      <div className="App">

       Stor bild
      </div>
    );
  }
}

export default BigImage;