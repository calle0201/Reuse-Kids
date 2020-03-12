import React, { Component } from 'react';
import Loggain from './Loggain';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
//import Auth from './Auth';
//mport Redsunset from './../images/redsunset.jpg';
import Redsunset from './../images/salj_din_begagnade_sportutrustning-reusesport.jpg';

import './LoginRegister.css';



class LoginRegister extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
       // this.props.handleLogin(data);
        this.props.history.push("/MySide");
    }
         
    render() {
      return (

        <div className="LoginRegister">
            <div className="LoginRegister-picture">
                <div className="LoginRegister-pictureimg"><img src={Redsunset} alt="Redsunset" /></div>
            </div>
            <h1 className="Sell-title">Har du begagnade barn produkter som inte används?</h1> 
                    <h2 className="Sell-intro">Sälj dem hos oss, det finns många som gärna vill köpa dem.</h2>
                
        

            <div className="LoginRegister-Box">
                <div className="LoginRegister-leftBox">
                    <Login />
                </div>
                <div className="LoginRegister-rightBox">
                    <h1 className="LoginRegister-rightBox_title"> Skapa konto.</h1>
                    <div className="Register-introduction"> För att lägga in annonser måste du skapa ett användarkonto. </div>
                    <Register />
                </div>
            </div>
            <div className="Login_register-Footer_Position">
            </div>
            <Footer />
        </div>

    );
  }
}

export default LoginRegister;
