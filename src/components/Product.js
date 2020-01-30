import React from 'react';

//import "./Buy.css";

class Product extends React.Component {
    render() {
        return (
            <div>
            <h3>{this.props.match.params.topicId}</h3>
            </div>
        );
    }  
}    

export default Product;