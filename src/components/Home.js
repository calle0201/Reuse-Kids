import React from 'react';
import HomeGallery from './HomeGallery';
import Loggain from './Loggain';
import Newsletter from './Newsletter';
import Footer from './Footer';
//import Sunset from './../images/sunset.jpg';
//import Ridning from './../images/häst.jpg';
//import Lacrosse from './../images/lacrosse2.jpg';
//import Konstakning from './../images/skridskor2.jpg';
//import Skidor from './../images/skidor2.jpg';
import Ridning from './../images/begagnad_ridutrustning_ridstovlar_ridhjalm-reusesport.jpg';
import Lacrosse from './../images/begagnad_lacrosseutrustning_lacrossehjalm_lacrossestick-reusesport.jpg';
import Konstakning from './../images/begagnad_konstakningsutrustning_konstakningsskridskor-reusesport.jpg';
import Skidor from './../images/begagnade_skidor-reusesport.jpg';
import "./Home.css";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

//Homesidan

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.getPHP = this.getPHP.bind(this);
    }

    componentDidMount () {
      /*  let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        const data = {
            host: host,
            user: user,
            password: password,
            database: database,
    
        }
       
        console.log(data);



        fetch('http://reusesport.se/APIs/homepictures.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then(data => console.log(data))*/
       

    }

    
    getPHP() {
        var formData = new FormData();
        formData.append('content', 'test2');
        fetch('http://localhost/reusesport/src/api/test.php', {
            method: 'POST',
            headers: {
                //Accept: 'application/json',
                //'Content-type': 'application/json',
            },
            body: formData,
        }).then(res => res.json())
        .then(response => {
            console.log('response:');
            console.log(response);
        });    
    }
          render() {
        return(
            <div className="Home">
                <div className="Home-picture">
                    <div className="Home-picture_images">
                        <div className="Home-pictureimg Image_skiing"><img src={Skidor} alt="Begagnad skidutrustning, skidor - ReUse Kids" /></div>
                        <div className="Home-pictureimg Image_riding"><img src={Ridning} alt="Begagnad ridutrustning, ridstövlar, ridhjälm - ReUse Kids" /></div>
                        <div className="Home-pictureimg Image_figureskating"><img src={Konstakning} alt="Begagnad konståkningsutrustning, konståkningsskridskor - ReUse Kids" /></div>
                        <div className="Home-pictureimg Image_lacrosse"><img src={Lacrosse} alt="Begagnad Lacrosseutrustning, lacrossestick, lacrossehjälm - ReUse Kids" /></div>
                    </div>
    
                </div>
                <div className="Home-content">
                    <div className="Home-content_left"></div>
                    <div className="Home-content_middle">
                        <div className="Home-header">
                        <h1 className="Header-title">Här kan du köpa och sälja dina barn produkter.</h1>
                        <div className="Home-box">
                            <h2 className="Home-info">Passa på!</h2>
                            <h3 className="Home-subinfo">Just nu kan du lägga in dina annonser gratis.</h3>     
                        </div>                  
                        <div className="Home-text">Genom att sälja din begagnade barn produkter hos oss tjänar du pengar. Samtidigt som du hjälper  
                        naturen att återhämta sig. Detta för att någon annan som behöver din utrustning kan köpa den istället för att köpa nytt.</div>

                        </div>
                        <div className="Home-content_position">
                        <div className="Home-content-text">De senast inlagda annonserna.</div>
                        <HomeGallery />
                        </div>
                    </div>    
                   
                
              
                    <div className="Home-content_right">
                        <div className="Home-content_right-title">Här kan du köpa och sälja din begagnade barn produkter</div>
                        <Newsletter />
                    </div>
                </div>   
                <Footer /> 
            </div>    
        );
    }
}

export default Home;