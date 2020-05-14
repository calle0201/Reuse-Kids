import React, { Component } from 'react';
import bild from '../images/aik.png'

class ImgRotate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rotation: 0,
        }
        this.rotateImageHöger = this.rotateImageHöger.bind(this);
        this.rotateImageVänster = this.rotateImageVänster.bind(this);
    }



rotateImageVänster() {
    let newRotation = this.state.rotation - 90;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
    })
    console.log('rotera bilden vänster');
}

rotateImageHöger() {
    let newRotation = this.state.rotation + 90;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
    })
    console.log('rotera bilden höger');
}

render() {
    const { rotation } =  this.state; 
    return (
        <div className="rotate">
            <img style={{transform: `rotate(${rotation}deg)`}} alt="din bild" className="Sell-seePicture" src={bild}/> <br></br>
            <span className="button_spin" onClick={this.rotateImageVänster}>snurra vänster</span>
            <span className="button_spin" onClick={this.rotateImageHöger}>snurra höger</span> 
        </div>
 );
}
}
export default ImgRotate