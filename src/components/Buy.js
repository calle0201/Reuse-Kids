import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from './Product';
//import RouteWithSubRoutes from './RouteWithSubRoutes';
import Badminton from './Badminton'; 
import Bandy from './Bandy'; 
import Cars from './Cars';
import Football from './Football'; 
import Figureskating from './Figureskating'; 
import Icehockey from './Icehockey'; 
import Lacrosse from './Lacrosse'; 
import Basketball from './Basketball'; 
import Boxing from './Boxing'; 
import Wrestling from './Wrestling'; 
import Archery from './Archery'; 
import Cheerleading from './Cheerleading'; 
import Bike from './Bike'; 
import Dance from './Dance'; 
import Diving from './Diving'; 
import Skydiving from './Skydiving'; 
import Airsport from './Airsport'; 
import Fencing from './Fencing'; 
import Golf from './Golf'; 
import Gymnastics from './Gymnastics'; 
import Athletics from './Athletics'; 
import Floorball from './Floorball'; 
import Martialart from './Martialart'; 
import Canoe from './Canoe'; 
import Climbing from './Climbing'; 
import Motorized from './Motorized'; 
import Tennis from './Tennis'; 
import Riding from './Riding'; 
import Rugby from './Rugby'; 
import Sailing from './Sailing'; 
import Ski from './Ski'; 
import Waterskiing from './Waterskiing'; 
import Windsurfing from './Windsurfing'; 
import Other from './Other'; 

import Handball from './Handball'; 
import Footer from './Footer'; 
import Search from './Search'; 
import Alladvertisment from './Alladvertisment'; 
import SubNavigation from './SubNavigation'; 
import "./Buy.css";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});



class Buy extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            hideAds: ''
        }
      

        this.hideAds = this.hideAds.bind(this);
    }

    hideAds(Ads){

       // console.log(Ads);
       this.setState({  
            hideAds: Ads
        });

        this.setState({
            hideAds: Ads
          }, () => {
          //  console.log(this.state.hideAds); 
          
           } );

    }
    
         
    render() {
     
        return (
            <div className="Buy">
                 <BrowserRouter>
            <div>
                <SubNavigation />
                <Switch>
                    <Route path="/Badminton" exact render={() => <Badminton hideAds={this.hideAds} />}/>
                    <Route path="/Bandy"  render={() => <Bandy hideAds={this.hideAds} />}/>
                    <Route path="/Basketball" render={() => <Basketball hideAds={this.hideAds} />}/>
                    <Route path="/Boxing"  render={() => <Boxing hideAds={this.hideAds} />}/>
                    <Route path="/Cars"  render={() => <Cars hideAds={this.hideAds} />}/>
                    <Route path="/Wrestling" render={() => <Wrestling hideAds={this.hideAds} />}/>
                    <Route path="/Other" render={() => <Other hideAds={this.hideAds} />}/>
                </Switch>
            </div>
          </BrowserRouter>


           <Alladvertisment hideAds={this.state.hideAds}/>
           <Footer />
          </div>
 
            );
        }
    }

export default Buy;