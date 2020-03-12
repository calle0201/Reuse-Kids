import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import Ocean from './../images/ocean.jpg';
import './Login.css';


import ReactGA from 'react-ga';





class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: "",
            loginPassword: "",
            email: "",
            password: "",
            loggedInStatus: "false",
            error: null,
            user: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.findUserid = this.findUserid.bind(this);
       // this.handleLogin = this.handleLogin.bind(this);
    }


   /* handleLogin(userid) {
        this.state = ({
            loggedInStatus: 'true'
        });
       console.log(userid);
       this.redirect(userid);
       this.props.history.push('/MySide');
        this.props.history.push({
            pathname: '/MySide',
            appState: {
                userid: this.userid,
                loggedInStatus: this.state.loggedInStatus
            }
        })   
    }*/



    findUserid() {

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        const data = {
            loginEmail: this.refs.loginEmail.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }


        fetch('https://reusesport.se/kidsAPI/userid.php', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(resp => resp.text()) 
        .then((data) => {
            console.log(data);
            this.setState({
               data: data 
            });
            let userid = this.state.data;

            this.setState = ({
                loggedInStatus: 'true'
            });
           console.log(userid);
       
           if(this.state.loggedInStatus === true) {
            this.props.history.push({
                pathname: '/MySide',
                appState: {
                    userid: this.userid,
                    loggedInStatus: this.state.loggedInStatus
                }
            })   
            }
            else {
                this.props.history.push('/Login');
            }
        });
    }        
    
      
      

    loginSubmit(event) {

        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        const data = {
            loginEmail: this.refs.loginEmail.value,
            loginPassword: this.refs.loginPassword.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }

        console.log(data);
    
       
        fetch('https://reusesport.se/kidsAPI/login.php', {
            method: 'POST',
             body: JSON.stringify(data),
        })
        .then(resp => resp.text()) 
        .then((data) => {
            console.log(data);
            this.setState({
               data: data 
            });

            if(data == 1) {
                alert('Du är nu inloggad.');
                this.findUserid();
            }
            else if(data == 2) {
                alert('Du har angett ett felaktigt lösenord.');
            }
            else if(data == 3) {
                alert('Du har angett ett felaktigt användarnamn.');
            }
            else{
               alert('Du kunde tyvärr inte loggas in. Försök igen senare.')
            }
        });
      
    }



   handleChange(event) {
      
   }
   /* onSubmit = () => {
        
    }*/
  
 /*   loginChange(event) {
      
    }
   /* onSubmit = () => {
         
     }*/

 render() {


    return (
    
        <div className="Login"> 

            <div className="LoginBox-title">Logga in (under utveckling)</div>
                <form className="Login-form" onSubmit={this.loginSubmit}>       
                    <input className="email" type="text" ref="loginEmail" placeholder="mailadress"   required/> 
                    <input className="password" type="text" ref="loginPassword" placeholder="lösenord"  required/>                             
                    <input  className="Submit_buttom" id="sub" type="submit" value="Logga in" />  
                </form>
            </div>       
                     
   
     
     
    );
  }
}

export default Login;