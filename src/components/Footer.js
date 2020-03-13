
import React, { Component } from 'react';
import './Footer.css';




class Footer extends Component {



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