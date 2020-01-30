import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.css";

//const Navigation = () => {
class CompoundNavigation extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div className={`HeadMenu ${this.props.active ? 'open' : 'close' }`}>
                <NavLink to="/compoundbuy" exact activeStyle={{ fontWeight: 'bold'}}>Köpa</NavLink>
                <NavLink to="/compoundsell" exact activeStyle={{ fontWeight: 'bold'}}>Sälja</NavLink>               
                <NavLink to="/mySide" exact activeStyle={{ fontWeight: 'bold'}}>MySide</NavLink>
                <NavLink to="/loginRegister" exact activeStyle={{ fontWeight: 'bold'}}>Logga in</NavLink>
            </div>
        )
    }
}

export default CompoundNavigation;