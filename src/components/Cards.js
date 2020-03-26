import React from "react";
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, annons} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img className="picture" src={picture}  alt={annons}/>
            <div className="details">
                <span className="index">{index+1}</span>
                
            </div>
        </div>
    )
}
export default Card;