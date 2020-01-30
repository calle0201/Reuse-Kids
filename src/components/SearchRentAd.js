import React, { Component } from 'react';
import Popup from './Popup';
import './SearchRentAd.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class SearchRentAd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            county: '',
            hideAds:''
        };

       
      //  this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        this.setState({county: nextProps.county});
        console.log(this.state.county)

        this.searchAd();
    }

    update() {

        this.setState({
            county: this.state.county,
            hideAds: this.props.hideAds
        })       
        
        console.log(this.props.hideAds);
    }


    searchAd() {
        console.log('searchad');
        console.log(this.state.county);
       // event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        
        const data = {
            host: host,
            user: user,
            password: password,
            database: database,
            county: this.state.county,
        }    

        console.log(data);


        
        fetch('https://reusesport.se/APIs/searchrentad.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
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

    togglePopup(id, e) {
        this.setState({
            clicked: id
        });
    }




    render() {
     
     
      return (
        <div className="SearchRentAd">
        <div className={`Alladvertisment ${this.state.hideAds? 'hidden':''}`}>
           {
                 
                 this.state.ads ?
                 this.state.ads.map((item) =>
                 <div className="Advertisment-outsideBox">
                 <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                     {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} size={item.size} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                     <div className="AdvertismentBox_title">
                        <div className="AdvertismentBox_titleText">{item.title}</div>
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

  export default SearchRentAd;  