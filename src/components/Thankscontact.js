import React, { Component } from 'react';
import Popup from './Popup';
import Redsunset from './../images/redsunset.jpg';
import './Thankscontact.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class Thankscontact extends Component {
         
         
    render() {
      return (

        <div className="Thankscontact">
            <h1 className="Thankscontact_title">Tack för ditt meddelande</h1>
            <div className="Thankscontact_text">Vi har nu mottagit ditt meddelande och återkommer så fort som möjligt. <br />
            Under kontorstid vanligen inom 24 timmar.</div>
        </div>

    );
  }
}

export default Thankscontact;