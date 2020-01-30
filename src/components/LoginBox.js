import React from 'react';
//import reactDOM from 'react-DOM';
import "./Login.css";

//Används ej 
class LoginBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {

    }

    render() {
        return(
        
        <div className="inner-container">
            <div className="header"> Logga in</div>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="login-input" placeholder="Username"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" className="login-input" placeholder="Password"/>
                </div>

                <button type="button"  className="login-btn" onClick={this.submitLogin.bind(this)}>Logga in</button>

            </div>
        </div>
        );
    }
}


export default LoginBox;
