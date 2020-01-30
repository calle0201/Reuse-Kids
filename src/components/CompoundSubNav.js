import React from 'react';
import { NavLink } from "react-router-dom";

import "./CompoundSubNav.css";

class CompoundSubNav extends React.Component {   

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
        <div className="CompoundSubNav">
            <NavLink className="CompoundSubNav_link" to="/CompoundSell" >Sälja</NavLink>
            <NavLink className="CompoundSubNav_link" to="/CompoundAds">Köpa</NavLink>
         </div>
    );    
    
    }

}

export default CompoundSubNav;