import React, {Component} from 'react';
import HCE from './../images/hce-logga.jpeg';
import './CompoundAds.css';
import LogCompound  from './LogCompound';
import CompoundSell  from './CompoundSell';
import NestadNav  from './NestadNav';
import CompoundSubNav from './CompoundSubNav';
import Popup from './Popup';
import Footer from './Footer';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class CompoundAds extends Component {

  

        constructor(props) {
            super(props);
            this.state = {
                ads: [],
                sport: '',
                county: '',
                hideAds:''
            };
    
            this.searchCounty = this.searchCounty.bind(this);
            this.searchSport = this.searchSport.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
           
        }
    
        componentWillReceiveProps(nextProps) {
            if(this.props.hideAds !== nextProps.hideAds) {
                this.setState({
                    hideAds: nextProps.hideAds
                })
            }
        }
    
        searchSport(event) {
            this.setState({sport: event.target.value});
           // console.log(event.target.value);
        }
    
        searchCounty(event) {
            this.setState({county: event.target.value});
          //  console.log(event.target.value);
        }
    
        update() {
    
            this.setState({
                sport: this.refs.sport.value,
                county: this.refs.county.value,
                hideAds: this.props.hideAds
            })       
            
           // console.log(this.props.hideAds);
        }
    
        handleSubmit(event) {
            event.preventDefault();
    
            let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
            let user = process.env.REACT_APP_REUSESPORT_DB_USER 
            let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
            let database = process.env.REACT_APP_REUSESPORT_DB_NAME
    
            
    
    
            const data = {
                host: host,
                user: user,
                password: password,
                database: database,
                sport: this.refs.sport.value,
                county: this.refs.county.value,
            }    
    
            console.log(data);
    
    
            
            fetch('https://reusesport.se/APIs/searchAd.php', {
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
    
              console.log(obj);
    
            fetch('https://reusesport.se/APIs/allcompoundads.php', obj)
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
            <div className="CompoundAds">
           
           <LogCompound />
            <CompoundSubNav />
            <div className="CompoundAds-innerbox">
            <h1 className="Compounds-title">Annonser</h1>

        <div className={`Compoundadvertisment ${this.state.hideAds? 'hidden':''}`}>
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
            <Footer />
            </div>
        );
    }    

}    

export default CompoundAds;    

/*
import React, { Component } from 'react';
import Popup from './Popup';
import './Alladvertisment.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Alladvertisment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            sport: '',
            county: '',
            hideAds:''
        };

        this.searchCounty = this.searchCounty.bind(this);
        this.searchSport = this.searchSport.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.hideAds !== nextProps.hideAds) {
            this.setState({
                hideAds: nextProps.hideAds
            })
        }
    }

    searchSport(event) {
        this.setState({sport: event.target.value});
       // console.log(event.target.value);
    }

    searchCounty(event) {
        this.setState({county: event.target.value});
      //  console.log(event.target.value);
    }

    update() {

        this.setState({
            sport: this.refs.sport.value,
            county: this.refs.county.value,
            hideAds: this.props.hideAds
        })       
        
       // console.log(this.props.hideAds);
    }

    handleSubmit(event) {
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        


        const data = {
            host: host,
            user: user,
            password: password,
            database: database,
            sport: this.refs.sport.value,
            county: this.refs.county.value,
        }    

        console.log(data);


        
        fetch('https://reusesport.se/APIs/searchAd.php', {
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

          console.log(obj);

        fetch('https://reusesport.se/APIs/alladvertisment.php', obj)
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
           
        


        </div>  
      );
    }
  }

  export default Alladvertisment;  */