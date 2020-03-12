import React, { Component } from 'react';
import MyAdvertisment from './MyAdvertisment';
import MyInformation from './MyInformation';
//import Logout from './Logout';
import './NewPassword.css';




class NewPassword extends Component {


    constructor(props) {
        super(props);
        this.state = {
          data: null,
          userid:'',
          loggedInStatus: 'false',
          newpasswordEmail: '',
          newPassword: '',
          seeNewpassword: false
        };
        this.NewpasswordSubmit = this.NewpasswordSubmit.bind(this);
        this.Newpassword = this.Newpassword.bind(this);
    }
  
    
       

    Newpassword(){

        console.log('klick');
       const currentState = this.state.seeNewPassword;
       this.setState({seeNewpassword: !currentState });

       console.log(this.state.seeNewpassword);
    }



    NewpasswordSubmit(event) {  

        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        const data = {
            newpasswordEmail: this.refs.newpasswordEmail.value,
            newPassword: this.refs.newPassword.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }

        console.log(data);

        fetch('https://reusesport.se/kidsAPI/newpassword.php', {
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
                alert('Ditt lösenord är nu ändrat.');
                
            }
            else {
                alert('Ditt lösenord kunde inte ändras.')
            }
        });    
    }

    render() {

        return (
            <div className="Newpassword_box">
                  <label className="Newpassword_button" onClick={this.Newpassword}>Glömt lösenordet?</label><br />
             
                <div className={`NewPassword ${this.state.seeNewpassword ? '':'Newpassword_hidden'}`}>
                     <form className="Newpassword-form" onSubmit={this.NewpasswordSubmit}>
                    <input className="Newpassword-email" type="text" ref="newpasswordEmail" placeholder="Din mailadress" required />
                    <input className="Newpassword-password" type="text" ref="newPassword" placeholder="Nytt lösenord" required /><br/>
                    <input className="Submit_button-newpassword" type="submit" id="sub" value="Ändra lösenordet" />
                    </form>
                </div>    
            </div>  
        );
    }
}

export default NewPassword;