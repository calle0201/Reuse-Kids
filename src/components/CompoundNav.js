import React, {Component, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from './Home'; 
import { withRouter } from 'react-router-dom';
import About from './About'; 
import Contact from './Contact';
import Sell from './Sell'; 
import Buy from './Buy';
import Rentadvertisment from './Rentadvertisment';
import Rent from './Rent';
import Register from './Register';
import LoginRegister from './LoginRegister';
import Goodtoknow from './Goodtoknow';
import ThanksAd from './ThanksAd';
import Thanksregister from './Thanksregister';
import Thankscontact from './Thankscontact';
import Thanksemail from './Thanksemail';
import NewsletterSide from './NewsletterSide';
import Advertismentside from './Advertismentside';
import Newpassword from './NewPassword';
import Testfile from './Testfile';
import Terms from './Terms';
import MySide from './MySide';
import Sellside from './Sellside'; 
import Compounds from './Compounds'; 
import LoginCompounds from './LoginCompounds'; 
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Recipe from './Recipe';
import Secrecy from './Secrecy';
import MailRecipe from './MailRecipe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//import { faInstagram } from '@fortawesome/free-solid-svg-icons'


import "./Nav.css";
import { parse } from '@fortawesome/fontawesome-svg-core';


class CompoundNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            logginInStatus: false,
            user: {},
          //  authTokens: '',
           // setAuthTokens: '',
        }    

        this.handleClick = this.handleClick.bind(this);
       // this.handleLogin = this.handleLogin.bind(this);
    }

    

  /*  setTokens(data) {
        localStorage.setItem("tokens", JSON.stringify(Tokendata));
        tokenData = JSON.parse(localStorage.getItem("Token"));
       /* this.setState ({
            setAuthTokens: data
        });*/
       
//}

    handleClick() {
        console.log('klick');
        this.setState({ active: !this.state.active});
    }
  
  render() {
      

      return (
        <div className="togglemeny">
          
       
            <div className="Hamburger-menu">
                <div className="HamburgerMenu " onClick={this.handleClick}><FontAwesomeIcon className="Hamburger"  icon={faBars} />
                  
                </div>
              
             
                <BrowserRouter>
                
                    <div className="Nav"> 
                        <Navigation active={this.state.active} />
                    
                        <div >
                    
                        <Switch>
                            <Route className="route" path="/" component={Home} exact/>
                            <Route path="/Buy" component={Buy} />
                            <Route path="/sell" component={Sell} />
                            <Route path="/about" component={About} />
                            <Route path="/rentadvertisment" component={Rentadvertisment} />
                            <Route path="/rent" component={Rent} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/loginRegister" component={LoginRegister} />
                            <Route path="/goodtoknow" component={Goodtoknow} />
                            <Route path="/terms" component={Terms} />
                            <Route path="/thanksad" component={ThanksAd} />
                            <Route path="/thanksregister" component={Thanksregister} />
                            <Route path="/thankscontact" component={Thankscontact} />
                            <Route path="/thanksemail" component={Thanksemail} />
                            <Route path="/testfile" component={Testfile} />
                            <Route path="/advertismentside" component={Advertismentside} />
                            <Route path="/mySide" component={MySide} />
                            <Route path="/sellside" component={Sellside} />
                            <Route path="/newsletterside" component={NewsletterSide} />
                            <Route path="/newpassword" component={Newpassword} />
                            <Route path="/compounds" component={Compounds} />
                            <Route path="/logincompounds" component={LoginCompounds} />
                            <Route path="/adminlogin" component={AdminLogin} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/recipe" component={Recipe} />
                            <Route path="/secrecy" component={Secrecy} />
                            <Route path="/mailrecipe" component={MailRecipe} />
                        </Switch>


                        
                        </div>
                    </div> 
                </BrowserRouter>
   
            </div>

           

        </div>
      ) 
  }
}

export default CompoundNav;