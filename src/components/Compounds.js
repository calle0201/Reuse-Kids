import React, {Component} from 'react';
import HCE from './../images/hce-logga.jpeg';
import './Compounds.css';
import LogCompound  from './LogCompound';
import CompoundSell  from './CompoundSell';
import CompoundAds  from './CompoundAds';
import CompoundSubNav  from './CompoundSubNav';
import NestadNav  from './NestadNav';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Compounds extends Component {

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
            <div className="Compounds">
           
            
            <h1 className="Compounds-title">Föreningssida</h1>
            <LogCompound />
            <CompoundSubNav />



            </div>
        );
    }    

}    

export default Compounds;    