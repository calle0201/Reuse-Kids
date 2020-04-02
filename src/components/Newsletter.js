import React, { Component } from 'react';


import './Newsletter.css';




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

        
        let host = 'reusesport.se.mysql';
        let user = 'reusesport_sekids';
        let password = 'J87jket37snjt89yte5lk2';
        let database = 'reusesport_sekids';



        const data = {
            email: this.refs.email.value,
            host: host,
            user: user,
            password: password,
            database: database
        }
   
        console.log(data);
        
     
        fetch('https://reusesport.se/kidsAPI/newsletter.php', {mode: "no-cors"}, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
            console.log(data);
            this.setState({
               data: data 
            });

            if(data === 1) {
                alert('Du kommer nu få vårt nyhetsbrev till din mail.');
            }
            else if (data === 2) {
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