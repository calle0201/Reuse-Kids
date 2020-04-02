import React, { Component } from 'react';
//import Redsunset from './../images/tank_pa_miljon-reusesport.jpg';
import Footer from './Footer';
import Redsunset from './../images/begagnade_sportartiklar_sportutrustning-reusesport.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

//import './About.css';
import './Contact.css';



class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        title: '',
        message: ''
      }
    ;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      title: event.target.title,
      message: event.target.message,
    });
  
  }

  update() {

    this.setState({
        name: this.refs.name.value,
        email: this.refs.email.value,
        title: this.refs.title.value,
        message: this.refs.message.value
    })
           
}

  handleSubmit(event) {
      
    event.preventDefault();

    
    let host = 'reusesport.se.mysql';
    let user = 'reusesport_sekids';
    let password = 'J87jket37snjt89yte5lk2';
    let database = 'reusesport_sekids';


    const data = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        title: this.refs.title.value,
        message: this.refs.message.value,
        host: host,
        user: user,
        password: password,
        database: database,
    }

    fetch('https://reusesport.se/kidsAPI/contact.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(resp => resp.text()) 
    .then((data) => {
        this.setState({
           data: data 
        });
        console.log(data);
        if(data === 1) {
          let path = 'Thankscontact';
          this.props.history.push(path); 
        }
        else{
            alert('Meddelandet gick inte fram försök igen senare.')
        }
    });
    event.target.reset();
  }


   onSubmit = () => {
       
   }

  render() {
    return (
      <div className="Contact">
        <div className="">
          <div className="About-picture">
            <div className="About-pictureimg"><img src={Redsunset} alt="Tänk på miljön, sälj din begagnade barn produkter - ReUse Kids" /></div>
            <div className="Contact-titleBox">
              <div className="Contact-title">Hos oss kan du köpa och sälja begagnade barn produkter.</div>
            </div>
          </div>
          <div className="Contact-content">
            <div className="Contact-content_right">
              <h1 className="About-title">Kontakt</h1>
                <div className="Contact-text">
                  Vi värnar om naturen och vill att alla barn produkter som ni har hemma ska komma till användning. Det är en vinst för alla.
                  Du som säljare tjänar pengar på saker du inte längre använder, du som köpare kan köpa billigare artiklar och naturen vinner på att sakerna
                  inte slängs innan de är uttjänta.
                </div>
              
                <div className="Contact-content_contact">
                  <div className="Contact-content_title">Kontakta oss:</div>
                <div className="contact-box">
                  <div className="contact-content_form">
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                      <input className="contact_input" type="text" value={this.state.name} placeholder="Ange ditt namn" ref='name' onChange={this.handleChange} onChange={this.update.bind(this)}/>
                      <input className="contact_input" type="text" value={this.state.email} placeholder="Ange din mailadress" ref='email' onChange={this.handleChange} onChange={this.update.bind(this)}/>
                      <input className="contact_input" type="text" value={this.state.title} placeholder="Skriv en passande rubrik" ref='title' onChange={this.handleChange} onChange={this.update.bind(this)}/>
                      <textarea className="contact_message" type="text" value={this.state.message} placeholder="Skriv ditt meddelande här" ref='message' onChange={this.handleChange} onChange={this.update.bind(this)}/>
                      <div className="contact_submitbox">
                        <input className="contact_submit" type="submit" value="Skicka meddelandet" />
                      </div>
                    </form>
                  </div>
                    <div className="Contact-content_address">
                      <div className="Contact-adress">Reuse Kids</div>
                      <div className="Contact-adress">Ängsvägen 4a</div>
                      <div className="Contact-adress">13648 Handen</div>
                      <div className="Contact-adress"><FontAwesomeIcon icon={faEnvelope} /> kontakt@reusekids.se</div>
                      <div className="Contact-adress"><FontAwesomeIcon icon={faPhone} /> 073-2420632</div>
                    </div>  
                  </div>
                </div>
              
              </div>
            </div>
         </div>
         <Footer />
      </div>
    );
  }
}

export default Contact;