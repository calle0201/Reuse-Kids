import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sell from './Sell';
import Buy from './Buy';
import './Sellbox.css';

//import React, {Component} from 'react';
import {BrowserRouter as NavLink, Redirect, Match, Prompt} from 'react-router-dom';

 //Länkar med köp och sälj

class SellBox extends Component {
 
        
    render() {
        return (
            <div>
            
            <Router>
                <div className="Nav">
                    <ul>
                        <li>
                            <Link to="/buy" exact activeStyle={{color:'green'}}>Köp</Link>
                        </li>
                        <li>
                            <Link to="/sell" exact activeStyle={{color:'green'}}>Sälj</Link>
                        </li>
                    </ul>    
                
                 <Route path="/buy" component={Buy} />
                 <Route path="/sell" component={Sell} />
                </div>
            </Router>
            
            </div>
        );

        
    }
}


export default SellBox;



