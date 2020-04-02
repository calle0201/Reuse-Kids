import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Product from './Product';
//import RouteWithSubRoutes from './RouteWithSubRoutes';
import Furniture from './Furniture'; 
import Toys from './Toys'; 
import Cars from './Cars';
import Clothes from './Clothes'; 
import Boxing from './Boxing'; 
import Other from './Other'; 
import Footer from './Footer'; 
//import Search from './Search'; 
import Alladvertisment from './Alladvertisment'; 
import SubNavigation from './SubNavigation'; 
import "./Buy.css";





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
            <div className="style">
                <SubNavigation />
                <Switch>
                    <Route path="/Furniture" exact render={() => <Furniture hideAds={this.hideAds} />}/>
                    <Route path="/Toys"  render={() => <Toys hideAds={this.hideAds} />}/>
                    <Route path="/Clothes" render={() => <Clothes hideAds={this.hideAds} />}/>
                    <Route path="/Boxing"  render={() => <Boxing hideAds={this.hideAds} />}/>
                    <Route path="/Cars"  render={() => <Cars hideAds={this.hideAds} />}/>
                    <Route path="/Other" render={() => <Other hideAds={this.hideAds} />}/>
                </Switch>
            </div>
          </BrowserRouter>
          <Alladvertisment  hideAds={this.state.hideAds}/>
            
         
           <Footer />
          </div>
 
            );
        }
    }

export default Buy;