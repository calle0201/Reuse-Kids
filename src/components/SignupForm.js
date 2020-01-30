import React from 'react';
/*import {Redirect} from 'react-router-dom';
import { PostData } from './PostData';
import MySide from './MySide';
import './Login.css';*/


//Används ej
class SignupForm extends React.Component {

    constructor() {
        super();
        this.state = {
            login: false,
            signup: true
        }
    }

    

    switch(word, e){
        console.log(word);
        e.preventDefault();
        console.log('byta flik registrera');
        var signup,login;
        if(word == "signup"){
            console.log('signup form')
            this.setState({
                signup: true,
                login: false
            });
        }
        else{
            console.log('LOGIN form')
            this.setState({
                signup: false,
                login: true
            });
        }
        return this.setState({login:login,signup:signup})
    }


    render () {
        console.log('registrera');
   
        return(
            <div className="Register id='signup' ">
            <h2>Registrera ny användare</h2>
            <form className="Register-form" onSubmit={this.registerSubmit}>
                <input type="text" name="email" ref="email" placeholder="mailadress" onChange={this.onChange} />
                <input type="password" name="password" ref="password" placeholder="lösenord" onChange={this.onChange} />
                <input type="county" name="county" ref="county" placeholder="Län" onChange={this.onChange} />
                <input type="submit" value="Registrera"/>
                
                <input type="checkbox" name="saveMyData" value="saveMyData"></input> Jag godkänner att Reuse Kids sparar mina uppgifter.
                <button className="loginButton" onClick={this.switch.bind(null,"login")} > Logga in</button>
            </form>    
            </div>
        )
    }
}

export default SignupForm;