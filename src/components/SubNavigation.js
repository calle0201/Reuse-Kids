import React from 'react';
import { NavLink } from "react-router-dom";

import "./SubNavigation.css";

class SubNavigation extends React.Component {   

    constructor(props) {
        super(props);
        this.state = {
            hideAdgallery: false,
        };

        this.chooseSport = this.chooseSport.bind(this);
       
    }


    chooseSport(event) {
       
        this.props.AdsGallery(this.state.hideAdgallery);

    }

    render() {

    return (
        <div className="SubNavigation">
            <NavLink className="Nav_link" to="/Badminton" >Badminton</NavLink>
            <NavLink to="/Bandy">Bandy</NavLink>
            <NavLink to="/Basketball">Basket</NavLink>
            <NavLink to="/Cars">Bilsport</NavLink>
            <NavLink to="/Boxing">Boxning</NavLink>
            <NavLink to="/Wrestling">Brottning</NavLink>
            <NavLink to="/Archery">Bågskytte</NavLink> 
            <NavLink to="/Cheerleading">Cheerleading</NavLink>
            <NavLink to="/Bike">Cykelsport</NavLink>
            <NavLink to="/Dance">Dans</NavLink>
            <NavLink to="/Diving">Dykning</NavLink>
            <NavLink to="/Skydiving">Fallskärm</NavLink>
            <NavLink to="/Airsport">Flygsport</NavLink>
            <NavLink to="/Football">Fotboll</NavLink>
            <NavLink to="/Athletics">Friidrott</NavLink>
            <NavLink to="/Fencing">Fäktning</NavLink>
            <NavLink to="/Golf">Golf</NavLink>
            <NavLink to="/Gymnastics">Gymnastik</NavLink>
            <NavLink to="/Handball">Handboll</NavLink>
            <NavLink to="/Icehockey">Ishockey</NavLink>
            <NavLink to="/Floorball">Innebandy</NavLink>
            <NavLink to="/Martialart">Kampsport</NavLink>
            <NavLink to="/Canoe">Kanot</NavLink>
            <NavLink to="/Climbing">Klättring</NavLink>
            <NavLink to="/Figureskating" >Konståkning</NavLink>
            <NavLink to="/Lacrosse">Lacrosse</NavLink>
            <NavLink to="/Motorized">Motorsport</NavLink>
            <NavLink to="/Tennis">Tennis</NavLink>
            <NavLink to="/Riding">Ridning</NavLink>
            <NavLink to="/Rugby">Rugby</NavLink>
            <NavLink to="/Sailing">Segling</NavLink>
            <NavLink to="/Ski">Skidåkning</NavLink>
            <NavLink to="/Waterskiing">Vattenskidor</NavLink>
            <NavLink to="/Windsurfing">Vindsurfing</NavLink>
            <NavLink to="/Other">Övriga</NavLink>
         </div>
    );    
    
    }

}

export default SubNavigation;