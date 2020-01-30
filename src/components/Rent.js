import React, { Component } from 'react';
import Ocean from './../images/salj_din_begagnade_sportutrustning-reusesport.jpg';
import SearchRentAd from './SearchRentAd';
import Price from './Price';
import AllRent from './AllRent';
import Footer from './Footer';
import './Rent.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Rent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            municipality: "",
            county: '',
            hideAds: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCounty = this.handleCounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideAds = this.hideAds.bind(this);
    }

    hideAds(Ads){
        console.log('dölj');
       this.setState({  
            hideAds: 'hidden'
        });

    

        this.setState({
            hideAds: 'hidden'
          }, () => {
            console.log(this.state.hideAds); 
           } );

    }
    

    update() {

        this.setState({
            sport: this.refs.sport.value,
            title: this.refs.title.value,
            text: this.refs.text.value,
            price: this.refs.price.value,
            size: this.refs.size.value,
            sort: this.refs.sort.value,
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            municipality: this.refs.municipality.value,
            county: this.refs.county.value,
            marketingpicture: this.state.marketingpicture
        })         
    }


    handleCounty(event) {
        this.setState({county: event.target.value});
    }

  


  
    
    handleSubmit(event) {
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
         
        const data = {
            county: this.refs.county.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }
       
        console.log(data);

        fetch('https://reusesport.se/APIs/searchrentad.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
           // console.log(data);
            this.setState({
                data: data 
            });
           // console.log(data)
          
        })
        .then(resp=>console.warn("result", resp))
    
       
        this.hideAds();

   
    }
   

    handleChange(event) {
        console.log('handleChange');
        
    }

    onSubmit = () => {
        
    }
  

  render() {
      
    return (
        <div className="Rent"> 
            <div className="Rent-picture">
                <div className="Rent-pictureimg"><img src={Ocean} alt="Hyr ut din begagnade barn produkter - Reuse Kids" /></div> 
            </div>    

                <div className="Rent-Box">
                    <div className="Rent-innerbox">
                        <h1 className="Rent-title">Här hittar du barn produkter som kan hyras.</h1> 

                          <form className="Rent-form" onSubmit={this.handleSubmit}>
                            <div className="Rent-innerBox">
                            <div className="Rent-input_title ">Välj vilket län du vill hyra utrustning i.</div>
                            <select className="Sell-county Rent-input" id="county" name="county" ref="county" onChange={this.handleChange} onChange={this.handleCounty} value={this.state.county}>                               
                                <option value="Blekinge">Blekinge</option>
                                <option value="Dalarna">Dalarna</option>
                                <option value="Gotland">Gotland</option>
                                <option value="Gävleborg">Gävleborg</option>
                                <option value="Halland">Halland</option>
                                <option value="Jämtland">Jämtland</option>
                                <option value="Jönkoping">Jönköping</option>
                                <option value="Kalmar">Kalmar</option>
                                <option value="Kronoberg">Kronoberg</option>                               
                                <option value="Norrbotten">Norrbotten</option>
                                <option value="Skåne">Skåne</option>
                                <option value="Stockholm">Stockholm</option>
                                <option value="Södermanland">Södermanland</option>
                                <option value="Uppsala">Uppsala</option>
                                <option value="Värmland">Värmland</option>
                                <option value="Västerbotten">Västerbotten</option>
                                <option value="Västernorrland">Västernorrland</option>                                
                                 <option value="Västermanland">Västermanland</option>
                                <option value="Västragötaland">Västra Götaland</option>
                                <option value="Örebro">Örebro</option>
                                <option value="Östergötland">Östergötland</option>
                            </select>   
                            </div>
                    
                             <div className="Rent-buttonBox">     
                                <input className="Rent-submit BlueButton" id="sub" type="submit" value="Sök utrustning" />
                            </div>
                        </form>
                    </div>    
                </div>  
            
            <SearchRentAd county={this.state.county}/>
            <AllRent hideAds={this.state.hideAds} />
            <Footer />
        </div>

    );
  }
}

export default Rent;

/*import React, { Component } from 'react';
import Ocean from './../images/salj_din_begagnade_barn produkter-reusesport.jpg';



/*import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllRent from './AllRent';
import Ocean from './../images/salj_din_begagnade_barn produkter-reusesport.jpg';
import Footer from './Footer'; 

import "./Rent.css";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});



class Rent extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            county: '',
            hideAds: ''
        }
      

        this.hideAds = this.hideAds.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hideAds(Ads){

       this.setState({  
            hideAds: Ads
        });

        this.setState({
            hideAds: Ads
          }, () => {
          //  console.log(this.state.hideAds); 
           } );

    }
    
      
    handleSubmit(event) {
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
         
        const data = {
        
            county: this.refs.county.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }
       
        console.log(data);

        fetch('https://reusesport.se/APIs/searchrentad.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
           // console.log(data);
            this.setState({
                data: data 
            });
           // console.log(data)
          
        })
        .then(resp=>console.warn("result", resp))
    

   
    }

    handleChange(event) {
        console.log('handleChange');
        
    }

    onSubmit = () => {
        
    }
    
    
    render() {
     
        return (
            <div className="Rent">
         
            <div className="Sell-picture">
                <div className="Sell-pictureimg"><img src={Ocean} alt="Sälj din begagnade barn produkter - Reuse Kids" /></div> 
                <div className="Rent-Box">
                    <div className="Rent-innerbox">
                        <h1 className="Rent-title">Här finner du barn produkter som är till uthyrning.</h1> 
                        <form className="Rent-form" onSubmit={this.handleSubmit}>
                            <div className="Rent-innerBox">
                            <div className="Rent-sport Sell-input_title ">Vilket län bor du i</div>
                            <select className="Rent-county Sell-input" id="county" name="county" ref="county" onChange={this.handleChange} onChange={this.handleCounty} value={this.state.county}>                               
                                <option value="0">Hela sverige</option>               
                                <option value="blekinge">Blekinge</option>
                                <option value="Dalarna">Dalarna</option>
                                <option value="Gotland">Gotland</option>
                                <option value="Gävleborg">Gävleborg</option>
                                <option value="Halland">Halland</option>
                                <option value="Jämtland">Jämtland</option>
                                <option value="Jonkoping">Jönköping</option>
                                <option value="Kalmar">Kalmar</option>
                                <option value="Kronoberg">Kronoberg</option>                               
                                <option value="norrbotten">Norrbotten</option>
                                <option value="Skåne">Skåne</option>
                                <option value="Stockholm">Stockholm</option>
                                <option value="Södermanland">Södermanland</option>
                                <option value="Uppsala">Uppsala</option>
                                <option value="Värmland">Värmland</option>
                                <option value="Västerbotten">Västerbotten</option>
                                <option value="Västernorrland">Västernorrland</option>                                
                                 <option value="vastermanland">Västermanland</option>
                                <option value="Västragötaland">Västra Götaland</option>
                                <option value="Örebro">Örebro</option>
                                <option value="Östergötland">Östergötland</option>
                            </select>   
                            </div>
            
            
                            <div className="Rent-innerBox">     
                                <input className="Rent-submit" id="sub" type="submit" value="Välj län för att hyra" />
                            </div>
                        </form>
                    </div>    
                </div>  
            </div>
    

            <AllRent hideAds={this.state.hideAds}/>
           <Footer />
          </div>
 
            );
        }
    }

export default Rent;
/*import React, { Component } from 'react';
import Ocean from './../images/salj_din_begagnade_barn produkter-reusesport.jpg';
import AllRent from './AllRent';
import Price from './Price';
//import UploadImage from './UploadImage';
import './Sell.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Rent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            county: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCounty = this.handleCounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
      
    }


    update() {

        this.setState({
            county: this.refs.county.value,
        })         
    }

 

    handleCounty(event) {
        this.setState({county: event.target.value});
    }

  
    
    handleSubmit(event) {
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
         
        const data = {
        
            county: this.refs.county.value,
            host: host,
            user: user,
            password: password,
            database: database,
        }
       
        console.log(data);

        fetch('https://reusesport.se/APIs/searchrentad.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
           // console.log(data);
            this.setState({
                data: data 
            });
           // console.log(data)
          
        })
        .then(resp=>console.warn("result", resp))
    

   
    }

    handleChange(event) {
        console.log('handleChange');
        
    }

    onSubmit = () => {
        
    }
  

  render() {
      
    return (
        <div className="Sell"> 
            <div className="Sell-picture">
                <div className="Sell-pictureimg"><img src={Ocean} alt="Sälj din begagnade barn produkter - Reuse Kids" /></div> 
                <div className="Sell-Box">
                    <div className="Sell-innerbox">
                        <h1 className="Sell-title">Här finner du barn produkter som är till uthyrning.</h1> 
                        <form className="Sell-form" onSubmit={this.handleSubmit}>
                            <div className="Sell-innerBox">
                            <div className="Sell-sport Sell-input_title ">Vilket län bor du i</div>
                            <select className="Sell-county Sell-input" id="county" name="county" ref="county" onChange={this.handleChange} onChange={this.handleCounty} value={this.state.county}>                               
                                <option value="0">Hela sverige</option>               
                                <option value="blekinge">Blekinge</option>
                                <option value="Dalarna">Dalarna</option>
                                <option value="Gotland">Gotland</option>
                                <option value="Gävleborg">Gävleborg</option>
                                <option value="Halland">Halland</option>
                                <option value="Jämtland">Jämtland</option>
                                <option value="Jonkoping">Jönköping</option>
                                <option value="Kalmar">Kalmar</option>
                                <option value="Kronoberg">Kronoberg</option>                               
                                <option value="norrbotten">Norrbotten</option>
                                <option value="Skåne">Skåne</option>
                                <option value="Stockholm">Stockholm</option>
                                <option value="Södermanland">Södermanland</option>
                                <option value="Uppsala">Uppsala</option>
                                <option value="Värmland">Värmland</option>
                                <option value="Västerbotten">Västerbotten</option>
                                <option value="Västernorrland">Västernorrland</option>                                
                                 <option value="vastermanland">Västermanland</option>
                                <option value="Västragötaland">Västra Götaland</option>
                                <option value="Örebro">Örebro</option>
                                <option value="Östergötland">Östergötland</option>
                            </select>   
                            </div>
            
            
                            <div className="Sell-innerBox">     
                                <input className="Sell-submit" id="sub" type="submit" value="Lägg upp annonsen" />
                            </div>
                        </form>
                    </div>    
                </div>  
            </div>
            <AllRent />
        </div>

    );
  }
}

export default Rent;*/