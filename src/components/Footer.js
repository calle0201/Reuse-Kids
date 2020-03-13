import { withRouter } from 'react-router';
import React, { Component } from 'react';
import './Footer.css';




class Footer extends Component {

constructor(props) {
  super(props);
   this.contact = this.contact.bind(this);
   this.faq = this.faq.bind(this);
   this.interestedthings = this.interestedthings.bind(this);
}

faq() {
  let path = 'Faq';
  this.props.history.push(path);
}
contact() {
  let path = 'contact';
  this.props.history.push(path);
}
interestedthings() {
  let path = 'interestedthings';
  this.props.history.push(path);
}


render() {
return (
<div className="Footer">
  <div className="inline">
  <div className="table-row-head">
    <h2>Behöver du hjälp?</h2>
    <p onClick={this.faq}>Frågor och svar</p>
    <p onClick={this.contact}>Kontakta oss</p>
  </div>
  <div className="table-row1">
  <h2>Sociala medier</h2>
   <a onClick={this.handleClick} href="#" target="_blank">Instagram</a>
   <a onClick={this.handleClick} a href="#" target="_blank">Facebook</a>
  </div>
  <div className="table-row2">
    <h2>Nyttig information</h2>
    <p onClick={this.interestedthings}>Intressanta texter</p>
  </div>
  <div className="Footer_second">
    <hr />
    <div className="Footer-taxes">Innehar F-skattsedel</div>
  </div>
  </div> 
</div>
);
}
}
export default withRouter(Footer);