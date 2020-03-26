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

              När jag höll på att utveckla ReUse Sport så kom jag att tänka på att det finns så mycket mer än sportartiklar som mycket enklare skulle kunna säljas på ett ställe. Där man enkelt kan hitta till det man söker. Jag har själv 4 barn och är det något som går åt under barnens uppväxt så är det kläder, dessa växes ut långt innan de är utslitna. Leksakerna är bara kul under en begränsad period och många barn kan roas av dem under deras livslängd.
                <br></br>
                Miljötänket finns hela tiden med i företaget. 

                  <div className="About-text_Poor">Genom att sälja det du inte använder kan du även hjälpa någon som vill ha någon barn produkt som en leksak men som inte har råd att köpa nya saker. </div>
                 
                  <div className="About-text_ide"> Vi vill att vi hjälps åt för att naturen ska kunna återhämta sig och för att alla som vill idrotta ska kunna göra det.</div>
                 
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
