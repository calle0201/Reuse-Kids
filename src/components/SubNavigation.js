import React from 'react';
import { NavLink } from "react-router-dom";
import "./SubNavigation.css";
//import Search from './Search';

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

                  
                    <div className="mobile">
                        <span onClick={this.handleClick} >Barn produkter</span>
                    </div>
                    
                    <div className='Dropdown-content mobile'>
                        <NavLink  to="/Furniture" >Möbler</NavLink>
                        <NavLink to="/Toys">Leksaker</NavLink>
                        <NavLink to="/Clothes">Kläder</NavLink>
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