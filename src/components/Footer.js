


import React, { Component } from 'react';
import './Footer.css';




class Footer extends Component {

constructor(props) {
  super(props);
   this.contact = this.contact.bind(this);
   this.faq = this.faq.bind(this);
   this.compounds = this.compounds.bind(this);
   this.recipe = this.recipe.bind(this);
   this.interestedthings = this.interestedthings.bind(this);
   this.takecareofyourthings = this.takecareofyourthings.bind(this);
}

faq() {
  let path = 'Faq';
  this.props.history.push(path);
}

contact() {
  let path = 'contact';
  this.props.history.push(path);
}

compounds() {
  let path = 'compoundsinfo';
  this.props.history.push(path);
}

interestedthings() {
  let path = 'interestedthings';
  this.props.history.push(path);
}

takecareofyourthings() {
  let path = 'takecareofyourthings';
  this.props.history.push(path);
}

recipe() {
  let path = 'recipeside';
  this.props.history.push(path);
}

render() {
return (
<div className="Footer">
  <table>
  <tr className="table-row-head">
    <th>Behöver du hjälp?</th>
    <th>Sociala medier</th>
    <th>Nyttig information</th>
  </tr>
  <tr className="table-row1">
    <td onClick={this.faq}>Frågor och svar</td>
    <td onClick={this.handleClick} ><a a href="#" target="_blank">Facebook</a> </td>
    <td onClick={this.interestedthings}>Intressanta texter</td>
  </tr>
  <tr className="table-row2">
    <td onClick={this.contact}>Kontakta oss</td>
    <td><a href="#" target="_blank">Instagram</a></td>
    <td className="white">inget att se här</td>
  </tr>
</table>
  <div className="Footer_second">
  <hr />
  <div className="Footer-taxes">Innehar F-skattsedel</div>
  </div> 
</div>
);
}
}
export default Footer;