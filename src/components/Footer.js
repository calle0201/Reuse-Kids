/* import React, { Component } from 'react';
import './Footer.css';




const history = createHistory()
  ReactGA.initialize('UA-140699741-1');
  history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


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
  <div className="Footer_first">
    <div className="Footer_first-leftBox">
      <div className="Footer_first-left">
       <div className="Footer_first-title"> Behöver du hjälp?</div>
        <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.faq}>Frågor och svar</span>
        </div>

        <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.contact}>Kontakta oss</span>
        </div>
      </div>

      <div className="Footer_first-middle">
        <div className="Footer_first-title">Sociala medier</div>

        <div className="Footer_first-subtitle" onClick={this.handleClick}><a href="#" target="_blank">Facebook</a>
        </div>

        <div className="Footer_first-subtitle" onClick={this.handleClick}><a href="#" target="_blank">Instagram</a>
        </div>
      </div>
</div>

<div className="Footer_first-rightBox">
  <div className="Footer_first-right">
    <div className="Footer_first-title">Nyttig information</div>

    <div className="Footer_first-subtitle">
      <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.interestedthings}>Intressanta texter</span>
      </div>
    </div>
  
  </div>
</div>
  </div>
  <div className="Footer_second">
  <hr />
  <div className="Footer-taxes">Innehar F-skattsedel</div>
  </div>
</div>
);
}
}
export default Footer; */


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
  <div className="Footer_first">
    <div className="Footer_first-leftBox">
      <div className="Footer_first-left">
       <div className="Footer_first-title"> Behöver du hjälp?</div>
        <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.faq}>Frågor och svar</span>
        </div>

        <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.contact}>Kontakta oss</span>
        </div>
      </div>

      <div className="Footer_first-middle">
        <div className="Footer_first-title">Sociala medier</div>

        <div className="Footer_first-subtitle" onClick={this.handleClick}><a href="#" target="_blank">Facebook</a>
        </div>

        <div className="Footer_first-subtitle" onClick={this.handleClick}><a href="#" target="_blank">Instagram</a>
        </div>
      </div>
</div>

<div className="Footer_first-rightBox">
  <div className="Footer_first-right">
    <div className="Footer_first-title">Nyttig information</div>

    <div className="Footer_first-subtitle">
      <div className="Footer_first-subtitle"><span className="Accept-text" onClick={this.interestedthings}>Intressanta texter</span>
      </div>
    </div>
  
  </div>
</div>
  </div>
  <div className="Footer_second">
  <hr />
  <div className="Footer-taxes">Innehar F-skattsedel</div>
  </div>
</div>
);
}
}
export default Footer;