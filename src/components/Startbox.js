import React, { Component } from 'react';
import Startboxmenu from './Startboxmenu';
import './Startbox.css';


//Används ej
//Box för köp och sälj
class Startbox extends Component {
  render() {
    return (
      <div className="Startbox">
        <Startboxmenu />
      </div>
    );
  }
}

export default Startbox;
