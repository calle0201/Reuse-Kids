import React from 'react';


class Advertismentside extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
    }

  



    render() {
      const clicked = this.props.clicked;
     
      return (

        <div className='Advertismentside'>
         
         
            <div className="Advertismentside_firstBox">
              <h5 className="Advertisment_number">Annonsnummer: {this.props.id}</h5>
              <h5 className="popup_date">Publicerad: {this.props.date}</h5>
            </div>
            <h1 className="popup_title">{this.props.title}</h1>
            <div className="popup_secondBox">
              <div className="popup_imageBox">
                <img className="popup_picture" src={this.props.picture} alt={this.props.title}/>
              </div>  
              <div className="popup_textBox">
                <h2 className="popup_text">{this.props.text}</h2>
                <h2 className="popup_size">Storlek: {this.props.size}</h2>
                <h2 className="popup_price">Pris: {this.props.price} kr</h2>
              </div>  
            </div>
            <div className="popup_secondBox">
              <div className="popup_sell">Säljaren vill bli kontaktad via</div>
              <div className="popup_thirdBox">
                <div className="popup_phone"> 0{this.props.phone}</div>
                <div className="popup_email"> {this.props.email}</div>
              </div>
              <div className="popup_fourthBox">
                <div className="popup_municipality">{this.props.municipality}</div>
                <div className="popup_county">{this.props.county}</div>
              </div>
            </div>
          </div>
     
      );
    }
   
}  

export default Advertismentside;