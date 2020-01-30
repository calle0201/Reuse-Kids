import React, { Component } from 'react';
import './Secrecy.css';
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


class Secrecy extends Component {
  render() {
    return (
      <div className="Secrecy">
        <div className="Home-picture">
          <div className="Home-picture_images">
            <div className="Home-pictureimg Image_skiing"><img src={Skidor} alt="Begagnad skidutrustning, skidor - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_riding"><img src={Ridning} alt="Begagnad ridutrustning, ridstövlar, ridhjälm - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_figureskating"><img src={Konstakning} alt="Begagnad konståkningsutrustning, konståkningsskridskor - ReUse Kids" /></div>
            <div className="Home-pictureimg Image_lacrosse"><img src={Lacrosse} alt="Begagnad Lacrosseutrustning, lacrossestick, lacrossehjälm - ReUse Kids" /></div>
          </div>
        </div>
        <div className="Secrecy-box">
            <h1 className="SecrecyTitle">Sekretesspolicy</h1>
            <div className="SecrecyText firstText">Vi använder din mailadress endast till att skicka vårt nyhetsbrev till dig. Vill du inte fortsätta prenumerationen kan du enkelt avsluta den.</div>
            <div className="SecrecyText">Vi förbinder oss att inte sälja eller på annat sätt föra din mailadress vidare till någon utomstående.</div>
        </div>
      </div>
    );
  }
}

export default Secrecy;