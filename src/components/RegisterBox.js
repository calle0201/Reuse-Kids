import React from 'react';
//import reactDOM from 'react-DOM';

import "./Login.css";

//Används ej
class RegisterBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {
        
    }

    render() {
        return(
        
            <div className="inner-container">
                <div className="header"> Register</div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="email">Mailadress</label>
                        <input type="text" name="email" className="login-input" placeholder="Mailadress"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className="login-input" placeholder="Lösenord"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="county">Län</label>
                        <input type="text" name="county" className="login-input" placeholder="Län"/>
                    </div>

                    <button type="button"  className="login-btn" onClick={this.submitRegister.bind(this)}>Registrera</button>

                </div>
            </div>
        );
    }
}


export default RegisterBox;
