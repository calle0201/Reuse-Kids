import React, {Component} from 'react';
import HCE from './../images/hce-logga.jpeg';
import AIK from './../images/aik.png';
import DIF from './../images/Dif.png';
import Anchors from './../images/anchors.png';
import './LoginCompounds.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class LoginCompounds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            compoundid:"",
            compound: "",
            setLoginEmail: "",
            compoundPassword: "",
            setLoginPassword: "",
            isLoggedIn: false,
            setLoggedIn: false,
            isError: false,
            setIsError: false,
            loggedInStatus: false
        }

        this.loginSubmit = this.loginSubmit.bind(this);
        this.findCompoundid = this.findCompoundid.bind(this);

    }

   /* componentWillMount() {
        localStorage.getItem('userid') && this.setState({
          //  userid: JSON.parse(localStorage.getItem('userid')),
            loggedInStatus: true
        })
        
    }*/

    findCompoundid() {

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        const data = {
            compound: this.refs.compound.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }

        fetch('https://reusesport.se/kidsAPI/compoundid.php', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(resp => resp.text())
        .then((data) => {
            console.log(data);
            this.setState({
                compoundid: data
            });

            let compoundid = this.state.compoundid;
            compoundid = compoundid.substring(1,compoundid.length - 1);
            console.log(compoundid);

            this.setState({ loggedInStatus: true }, function () {
                console.log(this.state.loggedInStatus);
           });
            
           console.log(this.state.loggedInStatus);


            this.props.history.push({
                pathname: '/Compounds',
                state: {
                    compoundid: compoundid,
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
            compound: this.refs.compound.value,
            compoundPassword: this.refs.compoundPassword.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }

        console.log(data);

        fetch('https://reusesport.se/kidsAPI/compoundslogin.php', {
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
                this.findCompoundid();
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
        localStorage.setItem('compoundid', JSON.stringify(nextState.userid));
        localStorage.setItem('loggedInDate', Date.now());
        console.log(localStorage);
    }


    render() {
        
     
        return (
            <div className="Compounds">
                <div className="Compounds-logga">
                    <img src={HCE} alt="Haninge cheer elite - Reuse Kids" />
                </div>
                <h1 className="Compounds-title">Föreningsinloggning</h1>
                 <div className="CompoundsLogin">
                <h1 className="CompoundsLogin-title">Logga in</h1>
                <form className="CompoundsLogin-form" onSubmit={this.loginSubmit}>
                    <input className="CompoundLogin-compound" type="text" ref="compound" placeholder="Din mailadress" required />
                    <input className="CompoundLogin-password" type="text" ref="compoundPassword" placeholder="Ditt lösenord" required /><br />
                    <input className="Submit_button-login" type="submit" id="sub" value="Logga in" />
                </form>
            </div>
            

                <div className="Compounds-logga_smallBox">
                    <div className="Compounds-logga_small">
                        <img src={HCE} alt="Haninge cheer elite - Reuse Kids" />
                    </div>
                    <div className="Compounds-logga_small">
                        <img src={DIF} alt="Djurgården - Reuse Kids" />
                    </div>
                    <div className="Compounds-logga_small">
                        <img src={AIK} alt="AIK - Reuse Kids" />
                    </div>
                    <div className="Compounds-logga_small">
                        <img src={Anchors} alt="Haninge Anchors - Reuse Kids" />
                    </div>
                </div>
            </div>
        );
    }    

}    
export default LoginCompounds;    