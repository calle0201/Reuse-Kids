import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.css";

//const Navigation = () => {
class Navigation extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div className={`HeadMenu ${this.props.active ? 'open' : 'close' }`}>
                <NavLink to="/" exact activeStyle={{ fontWeight: 'bold'}}>Hem</NavLink>
                <NavLink to="/buy" exact activeStyle={{ fontWeight: 'bold'}}>Köpa</NavLink>
                <NavLink to="/sell" exact activeStyle={{ fontWeight: 'bold'}}>Sälja</NavLink>
                <NavLink to="/about" exact activeStyle={{ fontWeight: 'bold'}}>Om ReUse Kids</NavLink>
                <NavLink to="/contact" exact activeStyle={{ fontWeight: 'bold'}}>Kontakt</NavLink>
                <NavLink to="/goodtoknow" exact activeStyle={{ fontWeight: 'bold'}}>Bra att veta</NavLink>
                <NavLink to="/mySide" exact activeStyle={{ fontWeight: 'bold'}}>MySide</NavLink>
                <NavLink to="/loginRegister" exact activeStyle={{ fontWeight: 'bold'}}>Logga in</NavLink>
            </div>
        )
    }
}

export default Navigation;