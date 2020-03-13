import React from 'react';
import Redsunset from './../images/dimma_vid_strand.jpg';
import { withRouter } from 'react-router-dom';
import './Register.css';





class Register extends React.Component {

constructor(props) {
super(props);
this.state = {

email: "",
registerPassword: "",
approved: "",
checkBoxStatus: false,
checkBoxNews: false,
text: "",
answer: ''
}
this.registerUser = this.registerUser.bind(this);
this.clickedCheckBoxApproved = this.clickedCheckBoxApproved.bind(this);
this.clickedCheckBoxNewsletter = this.clickedCheckBoxNewsletter.bind(this);
this.terms = this.terms.bind(this);


}

registerUser(event) {

event.preventDefault();


if(this.state.checkBoxStatus === true){

/*let host = process.env.REACT_APP_REUSESPORT_DB_HOST;
let user = process.env.REACT_APP_REUSESPORT_DB_USER
let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
let database = process.env.REACT_APP_REUSESPORT_DB_NAME*/

let host = 'reusesport.se.mysql';
let user = 'reusesport_sekids';
let password = 'J87jket37snjt89yte5lk2';
let database = 'reusesport_sekids';


var data = {

email: this.refs.email.value,
registerPassword: this.refs.password.value,
host: host,
user: user,
password: password,
database: database,

}


fetch('https://reusesport.se/APIs/registreraanvandare.php', {
method: 'POST',
body: JSON.stringify(data),
})
.then(resp => resp.text())
.then((data) => {
this.setState({
data: data
});

if(data == 1) {
alert('Du har redan ett konto hos oss.');
}
else if(data == 2) {
alert('Du måste ange både mailadress och lösenord.');
}
else {
let path = 'Thanksregister';
//let path = 'MySide';
this.props.history.push(path);
}
});

if( this.state.checkBoxNews === true) {

var data = {
email: this.refs.email.value,
host: host,
user: user,
password: password,
database: database,
}

console.log(data);

fetch('https://reusesport.se/APIs/newsletter.php', {
method: 'POST',
body: JSON.stringify(data),
})
.then(resp => resp.text())
.then(data => console.log(data))

}

event.target.reset();
}
else {
alert ('Du måste godkänna att vi sparar din mailadress.');
}


}


update() {
this.setState({
registerPassword: this.refs.password.value,

})
}

terms() {
let path = 'terms';
this.props.history.push(path);
}

clickedCheckBoxApproved(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const checkBoxStatus = target.name;

this.setState({
checkBoxStatus: true
});
}

clickedCheckBoxNewsletter(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const checkBoxNewsletter = target.name;

console.log( target.name);

this.setState({
checkBoxNews: true
});
}

render() {
return(
<div className="Register">



<div className="Register-box">

<form className="Register-form" onSubmit={this.registerUser}>
<input className="Register-email" name="email" type="text" ref="email" placeholder="Din mailadress" required/>
<input className="Register-password" name="password" type="text" ref="password" placeholder="Önskat lösenord" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
<div className="approved-checkbox_box">
<input className="approved-email" type="checkbox" onChange={this.clickedCheckBoxApproved} checked={this.state.checkBoxApproved} name="approved" /> <p className="checkbox-text">Jag godkänner att ni sparar min mail.</p>
<label className="approved-email_button" onClick={this.terms}>Läs våra villkor.</label><br />
</div>
<div className="approved-email_text">Prenumerera på vårt nyhetsbrev. Du kommer få  olika tips, värdekoder mm.</div>

<div className="approved-checkbox_box">
<input className="approved-checkbox" type="checkbox" onChange={this.clickedCheckBoxNewsletter} checked={this.state.checkBoxNewsletter} name="newsletter" /> <p className="checkbox-text">Jag önskar ert nyhetsbrev. </p><br />
</div>
<input className="Submit_button" id="sub" type="submit" value="Registrera mig"/> <br/>
</form>

</div>
</div>
)
}
}

export default withRouter(Register);