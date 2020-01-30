import React, { Component } from 'react';
import Redsunset from './../images/redsunset.jpg';

import './PublishedAd.css';

import './Newsletter.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class PublishedAd extends Component {
   
    
      render() {
        return (
          <div className="PublishedAd">
          Din annons är nu publicerad
           
          </div>
        );
      }
}

export default PublishedAd;