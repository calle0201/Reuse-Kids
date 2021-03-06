import React, { Component } from 'react';
import Popup from './Popup';


import {Helmet} from 'react-helmet';
import './Advertisment.css';




class Boxing extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
          datasport: null,
          clicked: null,
          ads: [],
          rotation: 0,
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

        fetch('https://reusesport.se/APIs/boxing.php', obj)
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
      const { rotation } =  this.state;
      return (
        <div>
             <Helmet>
                <title>Begagnade säkerhetsanordningar  </title>
                <meta name="description" content="Webbsida för begagnade boxningshandskar, boxningsboll, boxningsställning, boxboll, slagdocka, boxningssäck, päronboll, punch pad" />
            </Helmet>
            <h1 className="Advertisment_title">Säkerhetsanordningar</h1>
            <h3 className="Advertisment_subtitle">Är sidan tom finns det inga annonser för tillfället.</h3>

            <div className="Advertisment">
             
                    {
                        this.state.ads ?
                        this.state.ads.map((item) =>
                        <div className="Advertisment-outsideBox">
                        <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                         {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} size={item.size} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                         <h3 className="AdvertismentBox_title">{item.title}</h3>
                        <div className="AdvertismentBox_imageBox">
                            <img style={{transform: `rotate(${rotation}deg)`}} className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
                        </div>
                        <div className="show">{item.text}</div>
                        <div className="AdvertismentBox_price">{item.price} kr</div>
                        <div className="AdvertismentBox_date">{item.date}</div>
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

export default Boxing;