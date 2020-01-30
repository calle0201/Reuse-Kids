import React, { useState} from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import Canoe from './Canoe';
import Ski from './Ski';
import Figureskating from './Figureskating';
import Icehockey from './Icehockey';
import Badminton from './Badminton';
import Bandy from './Bandy';
import Basketball from './Basketball';
import Boxing from './Boxing';
import Wrestling from './Wrestling';
import Archery from './Archery';
import Bike from './Bike';
import Airsport from './Airsport';
import Football from './Football';
import Athletics from './Athletics';
import Floorball from './Floorball';
import Dance from './Dance';
import Cheerleading from './Cheerleading';
import Diving from './Diving';
import Skydiving from './Skydiving';
import Fencing from './Fencing';
import Golf from './Golf';
import Gymnastics from './Gymnastics';
import Handball from './Handball';
import Lacrosse from './Lacrosse';
import Martialart from './Martialart';
import Climbing from './Climbing';
import Motorized from './Motorized';
import Tennis from './Tennis';
import Riding from './Riding';
import Rugby from './Rugby';
import Sailing from './Sailing';
import Waterskiing from './Waterskiing';
import Windsurfing from './Windsurfing';
import Other from './Other';
import Home from './Home';
import Sell from './Sell';
import ProductList from './ProductList';
import About from './About';
import Contact from './Contact';
//import Login from './Login';
import Login from './Login';
import Register from './Register';
import MySide from './MySide';
import Terms from './Terms';
import NewAdvertisment from './NewAdvertisment';
//import ToggleMenu from './ToggleMenu';
import "./SportNav.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

/*onst User = (params) => {
  return (<h1> Välkommen {params.username}</h1>)
}


function componentDidMount() {

  let data = fetch('http://localhost/reusesport/src/api/product.php')
      .then((res) => {
          res.json().then((res) => {
              console.log(res);
              this.setState({data:res})
          })
      })

}*/



function Buy({ routes, ...props}) {

  console.log('öppna menyn');


  //let openMenu = props.isOpen;
  //isOpen = {props.isOpen}</p>;

  console.log(props.value)
  console.log(props.isOpenMenu)
  let openMenu = props.value;
  if(openMenu == 'open') {
    console.log('test');
  }
  else {
    console.log('nej');
  }
  

  //console.log(props.value);
  
  return (
   
    <div className="Navs_border">
    <div>{props.isOpenMenu}</div>

    <div className="SubNav" >
      <ul className={props.value ? 'close' : 'open'}>
        <li className="subNav_Box">
          <Link to="/buy/badminton">Badminton</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/bandy">Bandy</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/basketball">Basket</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/boxing">Boxning</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/wrestling">Brottning</Link>
        </li>
        <li className="subNav_Box"> 
          <Link to="/buy/archery">Bågskytte</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/cheerleading">Cheerleading</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/bike">Cykelsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/dance">Dans</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/diving">Dykning</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/skydiving">Fallskärm</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/airsport">Flygsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/football">Fotboll</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/athletics">Friidrott</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/fencing">Fäktning</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/golf">Golf</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/gymnastics">Gymnastik</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/handball">Handboll</Link>
        </li> 
        <li className="subNav_Box">
          <Link to="/buy/icehockey">Ishockey</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/floorball">Innebandy</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/martialart">Kampsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/canoe">Kanot</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/climbing">Klättring</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/figureskating">Konståkning</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/lacrosse">Lacrosse</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/motorized">Motorsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/riding">Ridsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/rugby">Rugby</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/sailing">Segling</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/ski">Skidsport</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/tennis">Tennis</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/waterskiing">Vattenskidor</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/windsurfing">Vindsurfing</Link>
        </li>
        <li className="subNav_Box">
          <Link to="/buy/other">Övrigt</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}

        
       
    </div>
    </div>

  );
}


const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/buy",
    component: Buy,
    routes: [
      {
        path: "/buy/badminton",
        component: Badminton
      },
      {
        path: "/buy/bandy",
        component: Bandy
      },
      {
        path: "/buy/basketball",
        component: Basketball
      },
      {
        path: "/buy/boxing",
        component: Boxing
      },
      {
        path: "/buy/wrestling",
        component: Wrestling
      },
      {
        path: "/buy/archery",
        component: Archery
      },
      {
        path: "/buy/bike",
        component: Bike
      },
      {
        path: "/buy/airsport",
        component: Airsport
      },
      {
        path: "/buy/football",
        component: Football
      },
      {
        path: "/buy/athletics",
        component: Athletics
      },
      {
        path: "/buy/diving",
        component: Diving
      },
      {
        path: "/buy/dance",
        component: Dance
      },
      {
        path: "/buy/cheerleading",
        component: Cheerleading
      },
      {
        path: "/buy/skydiving",
        component: Skydiving
      },
      {
        path: "/buy/fencing",
        component: Fencing
      },
      {
        path: "/buy/golf",
        component: Golf
      },
      {
        path: "/buy/gymnastics",
        component: Gymnastics
      },
      {
        path: "/buy/handball",
        component: Handball
      },
      {
        path: "/buy/icehockey",
        component: Icehockey
      },
      {
        path: "/buy/floorball",
        component: Floorball
      },
      {
        path: "/buy/lacrosse",
        component: Lacrosse
      },
      {
        path: "/buy/martialart",
        component: Martialart
      },
      {
        path: "/buy/canoe",
        component: Canoe
      },
      {
        path: "/buy/climbing",
        component: Climbing
      },
      {
        path: "/buy/figureskating",
        component: Figureskating
      },
      {
        path: "/buy/motorized",
        component: Motorized
      },
      {
        path: "/buy/tennis",
        component: Tennis
      },
      {
        path: "/buy/riding",
        component: Riding
      },
      {
        path: "/buy/rugby",
        component: Rugby
      },
      {
        path: "/buy/sailing",
        component: Sailing
      },
      {
        path: "/buy/ski",
        component: Ski
      },
      {
        path: "/buy/waterskiing",
        component: Waterskiing
      },
      {
        path: "/buy/windsurfing",
        component: Windsurfing
      },
      {
        path: "/buy/other",
        component: Other
      }
    ]
  },
  {
    path: "/sell",
    component: Sell
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/mySide/:username",
    component: MySide
  },
  {
    path: "/newadvertisment",
    component: NewAdvertisment
  },
  {
    path: "/terms",
    component: Terms
  },


];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}




function SportNav() {
  const [isOpen, setOpen] = useState({
    isOpen: false
  });

  const handleClick = e => {
    e.preventDefault();
    setOpen(isOpen => !isOpen);
   // console.log(isOpen);
    if(isOpen === true) {
      console.log('öppna')
      const openMenu = 'open';
      return <Buy isOpenMenu={openMenu}/>;
     // return <Buy isOpen={true} />
    } 
    else {
      console.log('stäng')
      const openMenu = 'close';
      return <Buy value={openMenu} />
    }      


   // console.log(isOpen);
  };
 
  return (
    <div>
   
    <Router>
    <div className="Nav" >
      <div className="Nav-inner" >
      <label className="Hamburger-icon" for="hamburger">&#9776;</label>
      <input className="Hamburger-checkbox" type="checkbox" id="Hamburger-btn"/>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li >
            <Link to="/buy" >Köpa</Link>
          </li>
          <li>
            <Link to="/sell">Sälja</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li className="login">
            <Link to="/register">Registrera</Link>
          </li>
          
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}

        

          </div>
      </div>
    </Router>
   </div>




  );
}

export default SportNav;