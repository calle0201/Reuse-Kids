import React from 'react';
import './Popup.css';
import picture from '../images/blomlinne.JPG'



class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: null,
          close: false,
        };

        this.closePopup = this.closePopup.bind(this);
       
    }

  
    closePopup(){
      this.setState(state => ({
        clicked: null,
        close: true,
      }));

      //history.goBack();
      //window.location.reload();
    }

 
    render() {
      
     
      return (

        <div  className={`popup  ${this.state.close ? "closeAd": ""}`}>
          <div className='popup_inner'>
            <div className="popup_firstBox">
              <div className="popup_number">Annonsnummer: 00</div>
              <div className="popup_date">Publicerad:04-16</div>
            </div>
            <h1 className="popup_title">testtitle</h1>
            <div className="popup_secondBox">
              <div className="popup_imageBox">
                <img className="popup_picture" src={picture}/>
              </div>  
              <div className="popup_textBox">
                <div className="popup_name">Säljare: kanske</div>
                <h2 className="popup_text">test</h2>
                <h2 className="popup_size">Storlek: -</h2>
                <h2 className="popup_price">Pris: 200 kr</h2>
              </div>  
            </div>
            <div className="popup_secondBox">
              <div className="popup_sell">Säljaren vill bli kontaktad via</div>
              <div className="popup_thirdBox">
                <div className="popup_phone"> 07267092</div>
                <div className="popup_email"> xx.xx@gmail.com</div>
              </div>
              <div className="popup_fourthBox">
                <div className="popup_municipality">något</div>
                <div className="popup_county">stockholm</div>
              </div>
            </div>
            <div className="popup_button" onClick={this.closePopup}>X</div>
          </div>
        </div>
      );
    }
  }

  export default Popup;  