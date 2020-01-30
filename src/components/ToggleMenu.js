import React, { Component } from 'react';
//import Popup from './Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Advertisment.css';


class ToggleMenu extends Component {

constructor(props) {
    super(props);
   
    this.state = {
      isActive: false
    }

    this.addActiveClass = this.addActiveClass.bind(this);
}

addActiveClass(event){
    console.log('klick');
    this.setState({
        isActive: !this.state.isActive
    })
  }

  render() {
    return (
    <div className={this.state.isActive === true ? "open" : "close"} onClick={this.addActiveClass}><FontAwesomeIcon icon={faBars} /></div>
    );
  }

}  


export default ToggleMenu;