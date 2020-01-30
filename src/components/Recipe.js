import React, { Component } from 'react';
import './Recipe.css';
import Ridning from './../images/begagnad_ridutrustning_ridstovlar_ridhjalm-reusesport.jpg';
import Lacrosse from './../images/begagnad_lacrosseutrustning_lacrossehjalm_lacrossestick-reusesport.jpg';
import Konstakning from './../images/begagnad_konstakningsutrustning_konstakningsskridskor-reusesport.jpg';
import Skidor from './../images/begagnade_skidor-reusesport.jpg';
import Footer from './Footer';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Recipe extends Component {
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
        <h1 className="RecipeTitle">Tack för att du vill ladda ner recepten!</h1>
        <h2 className="RecipeUndertitle">Hoppas att du får mycket nytta av dem.</h2>
        <div className="RecipeButton-position">
          <div className="RecipeButton">
            <a href="http://reusesport.se/whitepapers/bramellanmal.pdf" download>
              Ladda ner recepten
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;