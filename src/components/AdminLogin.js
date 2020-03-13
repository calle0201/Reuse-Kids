import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import NewPassword from './NewPassword';
import './Login.css';





class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginEmail: "",
            setLoginEmail: "",
            loginPassword: "",
            setLoginPassword: "",
            isLoggedIn: false,
            setLoggedIn: false,
            isError: false,
            setIsError: false,
            loggedInStatus: false
        }

        this.loginSubmit = this.loginSubmit.bind(this);
        this.findUserid = this.findUserid.bind(this);

    }

   /* componentWillMount() {
        localStorage.getItem('userid') && this.setState({
          //  userid: JSON.parse(localStorage.getItem('userid')),
            loggedInStatus: true
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

        fetch('https://reusesport.se/kidAPI/userid.php', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(resp => resp.text())
        .then((data) => {
            console.log(data);
            this.setState({
                userid: data
            });

            let userid = this.state.userid;
            userid = userid.substring(1,userid.length - 1);
            console.log(userid);

            this.setState({ loggedInStatus: true }, function () {
                console.log(this.state.loggedInStatus);
           });
            
           console.log(this.state.loggedInStatus);


            this.props.history.push({
                pathname: '/Admin',
                state: {
                    userid: userid,
                    loggedInStatus: this.state.loggedInStatus
                }
            })   
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
                data:data
            });
            if(data == 1) {
                this.findUserid();
            }
            else if(data == 2) {
                alert('Du har angett ett felaktigt lösenord.');
            }
            else if(data == 3) {
                alert('Du har angett ett felaktigt användarnamn.');
            }
            else {
                alert('Du kunde tyvärr inte logga in. Försök igen senare.');
            }
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('userid', JSON.stringify(nextState.userid));
        localStorage.setItem('loggedInDate', Date.now());
        console.log(localStorage);
    }

    render() {
        
     
    return (
        <div className="Login">
            <div className="Login-box">
                <h1 className="LoginBox-title">Logga in</h1>
                <form className="Login-form" onSubmit={this.loginSubmit}>
                    <input className="Login-email" type="text" ref="loginEmail" placeholder="Din mailadress" required />
                    <input className="Login-password" type="text" ref="loginPassword" placeholder="Ditt lösenord" required /><br />
                    <input className="Submit_button-login" type="submit" id="sub" value="Logga in" />
                </form>
            </div>
           
        </div>


    );
    }

}

export default withRouter(AdminLogin);