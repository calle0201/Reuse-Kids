import React, { Component } from 'react';
import Footer from './Footer';
//import Redsunset from './../images/redsunset.jpg';
import Redsunset from './../images/begagnade_sportartiklar-reusesport.jpg';
import './Goodtoknow.css';



class Goodtoknow extends Component {
         
         
    render() {
      return (

        <div className="Contact">
        <div className="About-box">
          <div className="About-picture">
            <div className="About-pictureimg"><img src={Redsunset} alt="Redsunset" /></div>
            <div className="About-titleBox">
              <div className="Goodtoknow-title">Köp och sälj begagnade barn produkter hos ReUse Kids</div>
            </div>
          </div>
          <div className="Contact-content">
          <div className="Goodtoknow-content">
            <div className="Goodtoknow-box">
                <h1 className="Goodtoknow-title">Bra att veta</h1>

                <h2 className="Goodtoknow-subtitle">Prislista</h2>

                <div className="Goodtoknow-tableBox">
              
                <table className="Goodtoknow-table">
                    <tr>
                        <th className="table-title">Pris på vara</th>
                        <th className="table-title">Pris på annons</th>
                    </tr>
                 
                    <tr>
                        <th> - 100 kr</th>
                        <th>10 kr</th>
                    </tr>
                    <tr>
                        <th>101 - 200 kr</th>
                        <th>20 kr</th>
                    </tr>
                    <tr>
                        <th>201 - 500 kr</th>
                        <th>30 kr</th>
                    </tr>
                    <tr>
                        <th>501 - 1000 kr</th>
                        <th>40 kr</th>
                    </tr>
                    <tr>
                        <th>1001 - 2000 kr</th>
                        <th>50 kr</th>
                    </tr>
                    <tr>
                        <th>2001 - 5000 kr</th>
                        <th>75 kr</th>
                    </tr>
                    <tr>
                        <th>5001 kr - 10000 kr</th>
                        <th>100 kr</th>
                    </tr>
                    <tr>
                        <th>10001 kr - </th>
                        <th>125 kr</th>
                    </tr>
                </table>

                </div>
               
                <h2 className="Goodtoknow-subtitle">Hoppas kunna använda dina bilder</h2>

                <div className="Goodtoknow-picture">
                    För att lättare kunna sälja dina produkter, vill ReUse Kids använda sig av dina bilder. Med ditt godkännande kommer dina produkter marknadsföras i sociala medier så som Facebook och Instagram.
                </div>

                <h2 className="Goodtoknow-subtitle">Annonsen</h2>

                <div className="Goodtoknow-picture">
                    Annonsen kommer tas bort automatiskt efter 90 dagar om du inte själv har tagit bort den innan dess. Några dagar innan annonsen tas bort kommer ett mail skickas ut med ett erbjudande om att förlänga annonsen.
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

export default Goodtoknow;