import React from 'react';
import Redsunset from './../images/dimma_vid_strand.jpg';
import { withRouter } from 'react-router-dom';
import './RegisterCompounds.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class RegisterCompounds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
       
            compound: "",
            registerPassword: "",
           // approved: "",
           // text: "",
           // answer: ''
        }    
        this.registerCompound = this.registerCompound.bind(this);
 
    }

     registerCompound(event) {

        event.preventDefault();


            let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
            let user = process.env.REACT_APP_REUSESPORT_DB_USER 
            let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
            let database = process.env.REACT_APP_REUSESPORT_DB_NAME


            var data = {

                compound: this.refs.compound.value,
                registerPassword: this.refs.registerPassword.value,
                host: host,
                user: user,
                password: password,
                database: database,

            }    

           fetch('https://reusesport.se/kidsAPI/compoundsregister.php', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(resp => resp.text()) 
            .then((data) => {
                this.setState({
                   data: data 
                });
                console.log(data);

                if(data == 1) {
                    alert('Konto är skapat')
                   
                }
                if(data == 3) {
                    alert('Uppgifter saknas.');
                }
                else {
                    alert('Kontot kunde inte skapas försök igen senare.');                    
                }
            });

            event.target.reset();

        
    }


    update() {
        this.setState({
            registerPassword: this.refs.registerPassword.value,
            
        })
    }

    render() {
        return(
            <div className="RegisterCompounds">
               
                <div className="RegisterCompounds-box">
                    <h1 className="RegisterCompounds-title">Registrera förening</h1>
                    <form className="RegisterCompounds-form" onSubmit={this.registerCompound}>
                        <input className="RegisterCompounds-email" name="compound" type="text" ref="compound" placeholder="Din förening"  required/>
                        <input className="RegisterCompounds-password" name="password" type="text" ref="registerPassword" placeholder="Önskat lösenord" onChange={this.handleChange} onChange={this.update.bind(this)} required/>   
                        <input className="Submit_button" id="sub" type="submit" value="Registrera förening"/> <br/>
                    </form>
                  
                </div>
            </div>
        )
    }    
}

export default withRouter(RegisterCompounds);