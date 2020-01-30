import React, { Component } from 'react';
import Redsunset from './../images/redsunset.jpg';

import './Newsletter.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''}
        ;
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({email: event.target.email});
      }
    
      handleSubmit(event) {
       
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 

        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME



        const data = {
            email: this.refs.email.value,
            host: host,
            user: user,
            password: password,
            database: database
        }
   
     
        fetch('https://reusesport.se/APIs/newsletter.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
            console.log(data);
            this.setState({
               data: data 
            });

            if(data == 1) {
                alert('Du kommer nu få vårt nyhetsbrev till din mail.');
            }
            else if (data == 2) {
                alert('Du måste ange din mailadress.');
            }
            else{
               alert('Du kunde tyvärr inte registrera dig för nyhetsbrev. Försök igen senare.')
            }
        });

        event.target.reset();
      }
    
      render() {
        return (
          <div className="Newsletter">
            <form className="Newsletter_form" onSubmit={this.handleSubmit}>
                <div className="Newsletter_title">Nyhetsbrev</div>
                <div className="Newsletter_text">Vill du få vårt nyhetsbrev med tips och erbjudanden till din mail. </div>
                <input className="Newsletter_email" type="text" value={this.state.email} placeholder="Ange din mailadress" ref='email' onChange={this.handleChange} />
                <input className="Newsletter_submit" type="submit" value="Prenumerera" />
            </form>
          </div>
        );
      }
}

export default Newsletter;