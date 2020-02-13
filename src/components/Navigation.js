import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.css";




//const Navigation = () => {
class Navigation extends Component {
    constructor(props) {
        super(props);
       
    }

    handleClick() {
        console.log('klick');
        this.setState({ active: !this.state.active});
    }

    render() {
        return (
            <div className={`HeadMenu ${this.props.active ? 'open' : 'close' }`}>
                <NavLink to="/" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Hem</NavLink>
                <NavLink to="/buy" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Köpa</NavLink>
                <NavLink to="/sell" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Sälja</NavLink>
                <NavLink to="/about" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Om ReUse Kids</NavLink>
                <NavLink to="/contact" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Kontakt</NavLink>
                <NavLink to="/goodtoknow" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Bra att veta</NavLink>
                <NavLink to="/mySide" exact activeStyle={{ fontWeight: 'bold'}}>MySide</NavLink>
                <NavLink to="/loginRegister" exact onClick={this.handleClick} activeStyle={{ fontWeight: 'bold'}}>Logga in</NavLink>
            </div>
        )
    }
}

export default Navigation;