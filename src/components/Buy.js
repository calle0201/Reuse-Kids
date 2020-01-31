import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from './Product';
//import RouteWithSubRoutes from './RouteWithSubRoutes';
import Badminton from './Badminton'; 
import Bandy from './Bandy'; 
import Cars from './Cars';
import Basketball from './Basketball'; 
import Boxing from './Boxing'; 
import Other from './Other'; 
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