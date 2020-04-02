import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.css";




//const Navigation = () => {
class Navigation extends Component {
  

    handleClick() {
       
        this.setState({ active: !this.state.active});
    }

    render() {
        return (
            <div className={`HeadMenu ${this.props.active ? 'open' : 'close' }`}>
                <NavLink to="/" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2' }}>Hem</NavLink>
                <NavLink to="/buy" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2' }}>Köpa</NavLink>
                <NavLink to="/sell" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>Sälja</NavLink>
                <NavLink to="/about" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>Om ReUse Kids</NavLink>
                <NavLink to="/contact" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>Kontakt</NavLink>
                <NavLink to="/goodtoknow" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>Bra att veta</NavLink>
                <NavLink to="/Faq" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>FAQ</NavLink>
                <NavLink to="/mySide" exact activeStyle={{ fontWeight: 'bold'}}>MySide</NavLink>
                <NavLink to="/loginRegister" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold', border: '1px solid black', background: '#bdaca2'}}>Logga in</NavLink>
               
            </div>
        )
    }
}

export default Navigation;