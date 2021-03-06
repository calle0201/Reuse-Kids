import React, { Component } from 'react';
import Popup from './Popup';
import './Advertisment.css';


import {Helmet} from 'react-helmet';




class Cars extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
          datasport: null,
          clicked: null,
          ads: [],

        };
    }
    
    togglePopup(id, e) {
        this.setState({
            clicked: id,
            
        });
    }
    
           
    componentDidMount() {

        const Ads = 'hidden';
        this.props.hideAds(Ads);

        let host = 'reusesport.se.mysql';
        let user = 'reusesport_sekids';
        let password = 'J87jket37snjt89yte5lk2';
        let database = 'reusesport_sekids';

        var obj = {  
            method: 'POST',
            body: JSON.stringify({
              host: host,
              user: user,
              password: password,
              database: database,
            })
          };


        fetch('https://reusesport.se/APIs/cars.php', obj)
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
             <Helmet>
                <title>Begagnade Cycklar för barn </title>
                <meta name="description" content="Webbsida för begagnade racerbilar, folkracebilar, dragracing, rallycross" />
            </Helmet>
        <h1 className="Advertisment_title">Cycklar för barn</h1>
        <h3 className="Advertisment_subtitle">Här finns det bilar och utrustning som reservdelar, hjälmar och skyddskläder. Är sidan tom finns det inga annonser för tillfället.</h3>
        
        <div className="Alladvertisment">
         
                {
                    this.state.ads ?
                    this.state.ads.map((item) =>
                    <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                        {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} size={item.size} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                        <h3 className="AdvertismentBox_title">{item.title}</h3>
                        <div className="AdvertismentBox_imageBox">
                            <img className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
                        </div>
                        <div className="show">{item.text}</div>
                        <div className="AdvertismentBox_price">{item.price} kr</div>
                        <div className="AdvertismentBox_date">{item.date}</div>
                        <div className="AdvertismentBox_county">{item.county}</div>
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

export default Cars;