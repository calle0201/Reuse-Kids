import React, { Component } from 'react';
import Popup from './Popup';
import Redsunset from './../images/redsunset.jpg';
import './ThanksAd.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class ThanksAd extends Component {
         
         
    render() {
      return (

        <div className="ThanksAd">
            <h1 className="ThanksAd-title">Tack, din annons är nu publicerad.</h1>
        </div>

    );
  }
}

export default ThanksAd;
