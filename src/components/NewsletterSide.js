import React, { Component } from 'react';
import './NewsletterSide.css';
import Running from './../images/löparbana.jpg';
/*import Ishall from './../images/begagnade_skridskor_konståkningsskridskor_hockeyskridskor-ReUse_sport.jpg';
import Fotboll from './../images/begagnad_barn produkter_fotbollsskor-Reuse_sport.jpg';
*/
import Ishall from './../images/ishall.jpg';
import Fotboll from './../images/fotboll.jpg';





class NewsletterSide extends React.Component {

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

            if(data == 1) {
                let path = 'thanksemail';
                this.props.history.push(path); 
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
          <div className="NewsletterSide">
             <div className="NewsletterSide-picture">
                <div className="NewsletterSide-picture_images">
                    <div className="NewsletterSide-pictureimg Image_ice"><img src={Ishall} alt="Ishockey and konståkning" /></div>
                    <div className="NewsletterSide-pictureimg Image_socker"><img src={Fotboll} alt="Fotboll" /></div>
                    <div className="NewsletterSide-pictureimg Image_running"><img src={Running} alt="Löpning och friidrott" /></div>
                </div>
              
            </div>
            <div className="NewsletterSide-box">
                <div className="NewsletterSide_title">Nyhetsbrev</div>
                <div className="NewsletterSide_text">Vill du få tips om hur du </div>
                <div className="NewsletterSide_list">Tar hand om din idrottsutrustning för att den ska hålla längre.</div>
                <div className="NewsletterSide_list">Hur du rengör din utrustning på bästa sätt. </div>
                <div className="NewsletterSide_list">Du kommer även få påminnelser om när det är dags att annonsera för olika sporter.</div>
                <div className="NewsletterSide_list">Erbjudanden om gratis annonsering.</div>
                <div className="NewsletterSide_text">Prenumerera på ReUse Kids nyhetsbrev.</div>
                <form className="NewsletterSide_form" onSubmit={this.handleSubmit}>
                    <input className="NewsletterSie_email" type="text" value={this.state.email} placeholder="Ange din mailadress" ref='email' onChange={this.handleChange} />
                    <input className="NewsletterSide_submit" type="submit" value="Prenumerera" />       
                </form>   
                <div className="NewsletterSide_time">Nyhetsbrevet kommer max en gång i månaden.</div>
            </div>
          </div>
        );
      }
}

  export default NewsletterSide;  