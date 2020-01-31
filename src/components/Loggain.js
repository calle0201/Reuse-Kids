import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: "",
            loginPassword: "",
           // email: "",
            //password: "",
            redirect: false,
            loggedIn: false,
            error: null
        };
      //  this.handleChange = this.handleChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    update() {
        this.setState({
            email: this.refs.email.value,
            password: this.refs.password.value,
        })
               
    }

   
    loginSubmit(event) {

        // let username;
         //this.setState={ loggedIn: false}
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

    render() {

        if(this.state.redirect) {
            return(<Redirect to={'/mySide'}/> )
        }
        return (
            <div className="Login"> 

            <div className="LoginBox-title">Inloggning</div>
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