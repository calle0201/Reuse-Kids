import React, { Component } from 'react';
//import Lacrosse from './../images/begagnad_barn produkter-reusesport.jpg';
import Lacrosse from './../images/begagnad_lacrosseutrustning_lacrossehjalm_lacrossestick-reusesport.jpg';
import './About.css';
import Footer from './Footer';




class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-box">
          <div className="About-picture">
            <div className="About-pictureimg"><img src={Lacrosse} alt="Begagnad barn produkter - " /></div>
            <div className="About-titleBox">
              <div className="About-titleBoxtext">Hos oss kan du köpa och sälja begagnade barn produkter </div>
            </div>
          </div>
          <div className="About-content">
            <div className="About-border">
            <div className="About-content_right">
              <h1 className="About-title">Grundarens tankar om företaget</h1>
              <div className="About-text">

                  Jag har själv flera barn som provat på ett par idrotter var. Det var när jag under en konståkningslektion satt 
                  och pratade med en annan mamma om alla saker som ligger hemma och inte används längre som jag kom på den här företagsidén.
                  Det gick några år och högen med idrotts saker blev större men nu är idén förverkligad. 
                  Jag vill både att vi ska hjälpas åt och spara på jordens resurser genom att återanvända alla fotbollsskor, slalomskidor, hockeyskydd och andra saker som ligger på
                  våra vindar, i garderober och källare. 

                  Allt som vi gör inom företaget ska göras med miljön som första prioritet, alla resor görs med kommunala färdmedel, all 
                  el är miljömärkt. 
                  <div className="About-text_Poor">Genom att sälja det du inte använder kan du även hjälpa någon som vill idrotta men som inte har råd att köpa nya saker. </div>
                 
                  <div className="About-text_ide"> vill att vi hjälps åt för att naturen ska kunna återhämta sig och för att alla som vill idrotta ska kunna göra det.</div>
                 
                 <div className="About-owner_name">Anna Conradson Sjöberg</div>
                 <div className="About-owner_title">Ägare och grundare</div>

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

export default About;
