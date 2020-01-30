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
                    <Route path="/Archery"  render={() => <Archery hideAds={this.hideAds} />}/>
                    <Route path="/Cheerleading"  render={() => <Cheerleading hideAds={this.hideAds} />}/>
                    <Route path="/Bike"  render={() => <Bike hideAds={this.hideAds} />}/>
                    <Route path="/Dance" render={() => <Dance hideAds={this.hideAds} />}/>
                    <Route path="/Diving" render={() => <Diving hideAds={this.hideAds} />}/>
                    <Route path="/Skydiving" render={() => <Skydiving hideAds={this.hideAds} />}/>
                    <Route path="/Airsport"  render={() => <Airsport hideAds={this.hideAds} />}/>
                    <Route path="/Football" render={() => <Football hideAds={this.hideAds} />}/>
                    <Route path="/Athletics"  render={() => <Athletics hideAds={this.hideAds} />}/>
                    <Route path="/Fencing"  render={() => <Fencing hideAds={this.hideAds} />}/>
                    <Route path="/Golf"  render={() => <Golf hideAds={this.hideAds} />}/>
                    <Route path="/Gymnastics"  render={() => <Gymnastics hideAds={this.hideAds} />}/>
                    <Route path="/Handball" render={() => <Handball hideAds={this.hideAds} />}/>
                    <Route path="/Bandy" render={() => <Bandy hideAds={this.hideAds} />}/>
                    <Route path="/Figureskating" render={() => <Figureskating hideAds={this.hideAds} />} />
                    <Route path="/icehockey" render={() => <Icehockey hideAds={this.hideAds} />}/>
                    <Route path="/Lacrosse"  render={() => <Lacrosse hideAds={this.hideAds} />}/>
                    <Route path="/Floorball"  render={() => <Floorball hideAds={this.hideAds} />}/>
                    <Route path="/Martialart"  render={() => <Martialart hideAds={this.hideAds} />}/> 
                    <Route path="/Canoe" render={() => <Canoe hideAds={this.hideAds} />}/>
                    <Route path="/Climbing"  render={() => <Climbing hideAds={this.hideAds} />}/>
                    <Route path="/Motorized" render={() => <Motorized hideAds={this.hideAds} />}/>
                    <Route path="/Tennis"  render={() => <Tennis hideAds={this.hideAds} />}/>
                    <Route path="/Riding"  render={() => <Riding hideAds={this.hideAds} />}/>
                    <Route path="/Rugby" render={() => <Rugby hideAds={this.hideAds} />}/>
                    <Route path="/Sailing"  render={() => <Sailing hideAds={this.hideAds} />}/>
                    <Route path="/Ski"  render={() => <Ski hideAds={this.hideAds} />}/>
                    <Route path="/Waterskiing" render={() => <Waterskiing hideAds={this.hideAds} />}/>
                    <Route path="/Windsurfing" render={() => <Windsurfing hideAds={this.hideAds} />}/>
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