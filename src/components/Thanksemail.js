import React, { Component } from 'react';
import Popup from './Popup';
import Redsunset from './../images/redsunset.jpg';
import './Thanksregister.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class Thanksemail extends Component {
         
         
    render() {
      return (

        <div className="Thanksregister">
            <h1 className="Thanksregister_title">Tack, du kommer nu få Reuse Kidss nyhetsbrev till din mail.</h1>
        </div>

    );
  }
}

export default Thanksemail;