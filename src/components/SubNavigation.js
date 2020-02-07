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
            <div className="Dropdown " >

                  
                    <div class="middle">
                        <span >Barn produkter</span>
                    </div>
               
                <div class="Dropdown-content mobile">
                    <NavLink className="Nav_link " to="/Badminton" >Möbler</NavLink>
                    <NavLink to="/Bandy">Leksaker</NavLink>
                    <NavLink to="/Basketball">Kläder</NavLink>
                    <NavLink to="/Cars">Cyklar</NavLink>
                    <NavLink to="/Boxing">Säkerhetsanordningar</NavLink>
                    <NavLink to="/Other">Övriga</NavLink>
                </div>
                    
            </div>
         </div>
    );    
    
    }

}

export default SubNavigation;