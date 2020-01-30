import React, { Component } from 'react';
import './Footer.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footerbox-left">
          <div className="Footer-taxes">Innehar F-skattsedel</div>
        </div>
        <div className="Footerbox-middle">
          <div className="Footer-name">Reuse Kids</div>
          <div className="Footer-intro">
            Hos oss kan du köpa och sälja begagnade barn produkter.
          </div>
        </div>  
        <div className="Footerbox-right">
        </div>
       

      </div>
    );
  }
}

export default Footer;