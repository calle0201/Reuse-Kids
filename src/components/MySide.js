import React, { Component } from 'react';
import MyAdvertisment from './MyAdvertisment';
import MyInformation from './MyInformation';
import Redsunset from './../images/tank_pa_miljon-reusesport.jpg';
import Logout from './Logout';
import Footer from './Footer';
import './MySide.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class MySide extends Component {


    constructor(props) {
        super(props);
        let userid = JSON.parse(localStorage.getItem('userid'));
        this.state = {
          data: null,
          userid: userid,
          loggedInStatus: 'false'
        };
    }

    componentDidMount() {

        let userid = JSON.parse(localStorage.getItem('userid'));
        console.log(userid);

        this.loggedIn(userid); 
    }    

    loggedIn(userid){
        if(userid===null) {
            console.log('logga in');
            
        }
        else {
            let userid = JSON.parse(localStorage.getItem('userid'));
            console.log(userid);

            userid = userid.substring(1,userid.length - 1);
            console.log(userid);

            this.setState ({
                userid: this.state.userid
            });

            console.log(userid);

       
        }

    }
  


    render() {
        console.log(this.state.userid);
        if (this.state.userid == null) {
            return (<div className="MySide_login"> Du måste logga in för att komma åt din sida.</div>)
        } else {

        
        return (   
          
            <div className="MySide">

                <div className="About-picture">
                    <div className="About-pictureimg"><img src={Redsunset} alt="Tänk på miljön, sälj din begagnade sportutrustning - ReUse Sport" /></div>
                    <div className="Contact-titleBox">
                    <div className="Contact-title">Hos oss kan du köpa och sälja begagnad sportutrustning.</div>
                    </div>
                </div>        
                <h1 className="MySide_welcome">Välkommen!</h1>
                <Logout userid={this.state.userid}/>
                <div className="MySide-Box">
                    <div className="MySide-innerBox">
                        <div className="Myside-leftBox">
                            <div className="MySide-first">Här på din personliga sida kan du se dina aktiva annonser, radera de annonser du har sålt och ändra dina personliga uppgifter.</div>
                            <div className="MySide-second"> Vi uppskattar om du raderar annonen så fort du har fått artikeln såld. Du slipper då att någon kontaktar dig i onödan. </div> 
                        </div>
                        <div className="Myside-rightBox">
                        
                        </div>
                    </div>
                    <MyAdvertisment  userid={this.state.userid}/>
                

                </div>  
                <Footer />
            </div>   
        ) 
        }
    }   
    
}

export default MySide;