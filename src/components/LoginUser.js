import React from 'react';
import Redsunset from './../images/dimma_vid_strand.jpg';
import './Register.css';



class LoginUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
       
            email: "",
            registerPassword: "",
            approved: "",
            checkBoxStatus: false,
            checkBoxNews: false,
            text: "",
            answer: ''
        }    
        this.loginSubmit = this.loginSubmit.bind(this);
       
       
 
    }

     loginSubmit(event) {

        event.preventDefault();


    

            let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 

            let user = process.env.REACT_APP_REUSESPORT_DB_USER 
            let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
            let database = process.env.REACT_APP_REUSESPORT_DB_NAME


            var data = {

                loginEmail: this.refs.email.value,
                loginPassword: this.refs.password.value,
                host: host,
                user: user,
                password: password,
                database: database,

            }    


           fetch('https://reusesport.se/kidsAPI/login.php', {
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
                    console.log(this.props.history);
                    let path = 'mySide';
                    this.props.history.push(path); 
                    
                }
                else {
                    alert('Felaktigt lösenord.');
                }
            });

          
       

        
    }


    update() {
        this.setState({
            registerPassword: this.refs.password.value,
            
        })
    }

    terms() {
        let path = 'terms';
        this.props.history.push(path);
    }

  

  

    render() {
        return(
            <div className="LoginUser">
               
              

                <div className="Register-box">
                   
                    <form className="Register-form" onSubmit={this.loginSubmit}>
                        <input className="email" name="email" type="text" ref="email" placeholder="Din mailadress"  required/><br/>
                        <input className="password" name="password" type="text" ref="password" placeholder="Önskat lösenord" onChange={this.handleChange} onChange={this.update.bind(this)} required/> <br/>     
                       
                       
                        <input className="Submit_button" id="sub" type="submit" value="Logga in"/> <br/>
                    </form>
                  
                </div>
            </div>
        )
    }    
}

export default LoginUser;