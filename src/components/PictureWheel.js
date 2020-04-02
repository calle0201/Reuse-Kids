import './PictureWheel.css';
import React, { Component } from 'react';
import Card from './Cards'
import data from './Data'

class PictureWheel extends Component {

    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }


    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property:data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property:data.properties[newIndex]
        })
    }
    
    render() {
        const {properties, property} = this.state;
    return (
     <div className="size">
         <div className="middle">
                <button onClick={() => this.nextProperty()}
                disabled={property.index === 
                data.properties.length-1}>
                    Next </button>
                <button onClick={() => this.prevProperty()}
                disabled={property.index === 0}
                >Prev</button>
            </div>
        <div className={`active-slide-${property.index} cards-slider`}>
            <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${property.index*(100/properties.length+ 69)}%)`
            }}>
                {
                    properties.map(property => <Card key={property._id} property={property} />)
                }
            </div>
        </div>
    </div>
        );
    };
}
export default PictureWheel;