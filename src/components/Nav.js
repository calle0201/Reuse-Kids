import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from './Home'; 
import About from './About'; 
import Contact from './Contact';
import Sell from './Sell'; 
import Buy from './Buy';
import LoginRegister from './LoginRegister';
import Goodtoknow from './Goodtoknow';
import ThanksAd from './ThanksAd';
import Thanksregister from './Thanksregister';
import Thankscontact from './Thankscontact';
import Thanksemail from './Thanksemail';
import NewsletterSide from './NewsletterSide';
import Advertismentside from './Advertismentside';
import Newpassword from './NewPassword';
import Terms from './Terms';
import MySide from './MySide';
import Sellside from './Sellside'; 
import Faq from './Faq';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Secrecy from './Secrecy';
import MailRecipe from './MailRecipe';

import MailInjury from './MailInjury';
import Payson from './Payson';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




import "./Nav.css";



class Nav extends Component {

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
                            <Route path="/contact" component={Contact} />
                            <Route path="/loginRegister" component={LoginRegister} />
                            <Route path="/goodtoknow" component={Goodtoknow} />
                            <Route path="/Faq" component={Faq} />
                            <Route path="/terms" component={Terms} />
                            <Route path="/thanksad" component={ThanksAd} />
                            <Route path="/thanksregister" component={Thanksregister} />
                            <Route path="/thankscontact" component={Thankscontact} />
                            <Route path="/thanksemail" component={Thanksemail} />
                            <Route path="/advertismentside" component={Advertismentside} />
                            <Route path="/mySide" component={MySide} />
                            <Route path="/sellside" component={Sellside} />
                            <Route path="/newsletterside" component={NewsletterSide} />
                            <Route path="/newpassword" component={Newpassword} />
                            <Route path="/adminlogin" component={AdminLogin} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/secrecy" component={Secrecy} />
                            <Route path="/mailrecipe" component={MailRecipe} />
                            <Route path="/mailinjury" component={MailInjury} />
                            <Route path="/payson" component={Payson} />
                        </Switch>


                        
                        </div>
                    </div> 
                </BrowserRouter>
   
            </div>

           

        </div>
      ) 
  }
}

export default Nav;