import React, { Component } from 'react';
import './Header.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facebook from './../images/facebook.svg';
import Instagram from './../images/instagram.svg';
//import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-leftBox">
          <div className="Header_cirle"></div>
          <div className="Header-name_head">
          ReUse 
          </div>
          <div className="Header-name_under">
          Kids
          </div>
        </div>
        <div className="Header-middleBox">
          <div className="Header-intro">
          Var rädd om naturen och din ekonomi
          </div>
        </div>
        <div className="Header-rightBox">
          <div className="Header-rightBox_first"></div>
          <div className="Header-rightBox_second">
            <div className="Facebook" onClick={this.handleClick}><a href="https://www.facebook.com/reusesport.se/" target="_blank"><img src={Facebook} alt="Facebook -  ReUse Kids" /></a></div>
            <div className="Instagram" onClick={this.handleClick}><a href="https://www.instagram.com/reusesport.se/" target="_blank"><img src={Instagram} alt="Instagram -  ReUse Kids" /></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
