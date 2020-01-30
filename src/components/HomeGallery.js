import React from 'react';
import Popup from './Popup';
import "./HomeGallery.css";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
//import Thumbnail from 'react-thumbnail';

import Redsunset from './../images/redsunset.jpg';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

//Bildgalleriet på Homesidan

class HomeGallery extends React.Component {


    constructor(props, pic) {
        super(props, pic);
        this.state = {
          datasport: null,
          clicked: null,
          pictures: '',
          ads: [],
          data: []
        };
    }

   
    
    togglePopup(id, e) {
        this.setState({
            clicked: id
        });
    }
    

    componentDidMount() {

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        
        var obj = {  
            method: 'POST',
            body: JSON.stringify({
              host: host,
              user: user,
              password: password,
              database: database,
            })
          };


        fetch('https://reusesport.se/APIs/homepictures.php', obj)
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => {
              console.log(json);
            this.setState({
              ads: json
            });
          });   

   }

     

         render() {
             
                         
            return (
                <div>
              
                <div className="Advertisment Advertisment-homepage">

                   
             
                {
                 
                    this.state.ads ?
                    this.state.ads.map((item) =>
                    <div className="Advertisment-outsideBox">
                    <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                        {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                        <div className="AdvertismentBox_title">
                            <div className="AdvertismentBox_titletext">{item.title}</div>
                        </div>
                        <div className="AdvertismentBox_imageBox">
                            <img className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
                        </div>
                        <div className="AdvertismentBox_price">{item.price} kr</div>
                        <div className="AdvertismentBox_date">{item.date}</div>
                        <div className="AdvertismentBox_county">{item.municipality}</div>
                        <div className="AdvertismentBox_county">{item.county}</div>
                    </div>
                    </div>
                )
                    :
                    <h3>Vänta - datat hämtas</h3>
                }
      
        </div>
        </div>
  
            );
        }
   
}  

export default HomeGallery;