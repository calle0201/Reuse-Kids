import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Buybox from './Buybox'; 
import Sellbox from './Sellbox'; 
import './Startboxmenu.css';


//Används ej
class Startboxmenu extends Component {
  render() {
        return (
            <div className="Startboxmenu">
            <Router>
                <div className="Startboxmenu-header">
                    <ul>
                        <li>
                            <NavLink className="Startboxmenu-buy" to="/buybox" exact activeStyle={{color:'green'}}>Buy</NavLink>
                        </li>
                        <li>
                            <NavLink className="Startboxmenu-sell" to="/sellbox" exact activeStyle={{color:'green'}}>Sell</NavLink>
                        </li>
                    
                    </ul>    

                 

              
                <Route path="/buybox" exact strict render={
                    () => {
                        return ( <Buybox />);
                    }
                } />
                <Route path="/sellbox" exact strict render={
                    () => {
                        return ( <Sellbox />);
                    }
                } />
               
               
                </div>
            </Router>
            </div>
        );
    }
}



export default Startboxmenu;
