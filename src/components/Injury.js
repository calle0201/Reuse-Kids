import React, { Component } from 'react';
import './Recipe.css';
import Ridning from './../images/begagnad_ridutrustning_ridstovlar_ridhjalm-reusesport.jpg';
import Lacrosse from './../images/begagnad_lacrosseutrustning_lacrossehjalm_lacrossestick-reusesport.jpg';
import Konstakning from './../images/begagnad_konstakningsutrustning_konstakningsskridskor-reusesport.jpg';
import Skidor from './../images/begagnade_skidor-reusesport.jpg';
import Footer from './Footer';




class Injury extends Component {
  render() {
    return (
      <div className="Recipe">
        <div className="Home-picture">
          <div className="Home-picture_images">
            <div className="Home-pictureimg Image_skiing"><img src={Skidor} alt="Begagnad skidutrustning, skidor - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_riding"><img src={Ridning} alt="Begagnad ridutrustning, ridstövlar, ridhjälm - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_figureskating"><img src={Konstakning} alt="Begagnad konståkningsutrustning, konståkningsskridskor - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_lacrosse"><img src={Lacrosse} alt="Begagnad Lacrosseutrustning, lacrossestick, lacrossehjälm - ReUse Kids" /></div>
          </div>
        </div>
        <h1 className="RecipeTitle">Tack för att du vill ladda ner tipsen om hur du undviker skador!</h1>
        <h2 className="RecipeUndertitle">Hoppas att du får nytta av dem.</h2>
        <div className="RecipeButton-position">
          <div className="RecipeButton">
            <a href="http://reusesport.se/whitepapers/Undvikskador.pdf" download>
              Ladda ner tipsen 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Injury;
