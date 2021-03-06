import React, { Component } from 'react';
import Ocean from './../images/salj_din_begagnade_sportutrustning-reusesport.jpg';
import Price from './Price';
import Footer from './Footer';
//import Payson from './Payson';
import './Sell.css';






class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
        rotation: 0,
        subject: "",
        title: "",
        text: "",
        price: "",
        picture: null,
        picturefile: "",
        thepicture: "",
        name: "",
        email: "",
        phone: "",
        size: "",
        sort: "",
        municipality: "",
        county: "",
        value: "",
        selectedFile: null,
        file: null,
        checkBoxStatus: false,
        pictureInput: "",
        marketingpicture: false,
       
        
};
    this.rotateImageHöger = this.rotateImageHöger.bind(this);
    this.rotateImageVänster = this.rotateImageVänster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSport = this.handleSport.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleCounty = this.handleCounty.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.terms = this.terms.bind(this);
    this.register = this.register.bind(this);
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

update() {

this.setState({
    subject: this.refs.subject.value,
    title: this.refs.title.value,
    text: this.refs.text.value,
    price: this.refs.price.value,
    size: this.refs.size.value,
    sort: this.refs.sort.value,
    name: this.refs.name.value,
    email: this.refs.email.value,
    phone: this.refs.phone.value,
    municipality: this.refs.municipality.value,
    county: this.refs.county.value,
    marketingpicture: this.state.marketingpicture
})
}

handleSport(event) {
    this.setState({sport: event.target.value});
}

handleSort(event) {
    this.setState({sort: event.target.value});
}

handleCounty(event) {
    this.setState({county: event.target.value});
}

fileSelected(event) {
    this.setState({
        picture: event.target.files[0],
        file: URL.createObjectURL(event.target.files[0])
})

// <img className="Sell-seePicture" src={this.state.file}/>

}




fileUpload(event) {

const picturename = this.refs.picture.value.split('C:\\fakepath\\')[1];
// console.log('PHOTO:', this.state.picture);
// console.log('name:', picturename);

const h = {}; //headers
    let data = new FormData();
    data.append('email', this.state.email);
    data.append('image', this.state.picture);
    data.append('name', picturename);
    h.Accept = 'application/json'; //if you expect JSON response

fetch('https://reusesport.se/kidsAPI/getid.php', {
    method: 'POST',
    headers: h,
    body: (data)
})
    .then(resp => resp.text())
    .then(data => console.log(data))

}



handleSubmit(event) {
    event.preventDefault();

if(this.state.checkBoxStatus === true) {

let host = 'reusesport.se.mysql';
let user = 'reusesport_sekids';
let password = 'J87jket37snjt89yte5lk2';
let database = 'reusesport_sekids';


const image = this.refs.picture.value.split('C:\\fakepath\\')[1];
const data = {
    subject: this.refs.subject.value,
    title: this.refs.title.value,
    text: this.refs.text.value,
    price: this.refs.price.value,
    size: this.refs.size.value,
    sort: this.refs.sort.value,
    picture: image,
    name: this.refs.name.value,
    email: this.refs.email.value,
    phone: this.refs.phone.value,
    municipality: this.refs.municipality.value,
    county: this.refs.county.value,
    host: host,
    user: user,
    password: password,
    database: database,
    marketingpicture: this.state.marketingpicture,
}


console.log(data);

fetch('https://reusesport.se/kidsAPI/newadvertisment.php', {
method: 'POST',
body: JSON.stringify(data)
})
    .then(resp => resp.text())
    .then((data) => {
// console.log(data);
    this.setState({
        data: data
});
// console.log(data)
if(data === 1) {
    let path = 'thanksad';
    this.props.history.push(path);
}
else if(data === 2) {
    alert('Du måste fylla i alla fälten.');
}
else if(data === 3) {
    alert('Bilden måsta vara mindre än 2 MB.');
}
else if(data === 4) {
    alert('Något är fel.');
}
else{
alert('Annonsen kunde inte publiceras försök igen senare.');
}
})
.then(resp=>console.warn("result", resp))



const picturename = this.refs.picture.value.split('/run/tmp/')[1];

const h = {}; //headers
let imagedata = new FormData();

imagedata.append('host', host);
imagedata.append('user', user);
imagedata.append('password', password);
imagedata.append('database', database);

imagedata.append('email', this.state.email);
imagedata.append('image', this.state.picture);
imagedata.append('name', picturename);
h.Accept = 'application/json'; //if you expect JSON response

fetch('https://reusesport.se/kidsAPI/getid.php', {
method: 'POST',
headers: h,
body: (imagedata)
})
.then(resp => resp.text())
// .then(imagedata => console.log(imagedata))



}
else {
alert('Du måste godkänna att vi sparar dina uppgifter för att kunna lägga in annonsen.')
}


}


acceptDataApproved(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
let checkBoxStatus = false;

if(target.name === 'approved') {

this.setState({
checkBoxStatus: true
}, function() {
console.log(this.state.checkBoxStatus);
});
}
}

onAcceptPicture(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
let checkBoxStatus = false;

if(target.name === 'acceptPicture') {

this.setState({
marketingpicture: true
}, function() {
console.log(this.state.marketingpicture);
});


}
}

registerUser() {

}



terms() {
let path = 'terms';
this.props.history.push(path);
}


register() {
let path = 'loginRegister';
this.props.history.push(path);
}


handleChange(event) {
console.log('handleChange');

}

onSubmit = () => {

}


render() {
  const { rotation } =  this.state; 
return (

<div className="Sell">
<div className="Sell-picture">
<div className="Sell-pictureimg"><img src={Ocean} alt="Sälj din begagnade barn produkter - Reuse Kids" /></div>
<div className="Sell-outerBox">

<div className="Sell-Box">
<div className="Sell-innerbox">
<h1 className="Sell-title">Har du begagnade barnprodukter som inte används?</h1>
<h2 className="Sell-intro">Sälj dem hos oss, det finns många som gärna vill köpa.</h2>
<h2 className="Sell-intro">För att lägga in din första annons måste du skapa ett användarkonto. Registrera dig <div className="registerLink" onChange={this.registerUser.bind(this)} onClick={this.register}>här </div></h2>

<div className="attention">Rekommenderar att du använder Safari, Chrome, Opera eller Firefox när du lägger in annonser.</div>

<form className="Sell-form" onSubmit={this.handleSubmit}>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Välj barn produkt</div>
<select className="Sell- Sell-input" id="sport" name="sport" ref="subject" onChange={this.handleChange} onChange={this.handleSport} value={this.state.sport} required>
<option value="Amning">Amning</option>
<option value="Barnvagnar">Barnvagnar</option>
<option value="Bärselar">Bärselar</option>
<option value="Flytvästar">Flytvästar</option>
<option value="Haklappar">Haklappar</option>
<option value="Inredning">Inredning</option>
<option value="Kläder">Kläder</option>
<option value="Leksaker">Leksaker</option>
<option value="Matsaker">Matsaker</option>
<option value="Möbler">Möbler</option>
<option value="Skyddsutrustning">Skyddsutrustning</option>
<option value="Skötväskor">Skötväskor</option>
<option value="Textil">Textil</option>
<option value="Övriga">Övriga</option>
</select>
</div>

<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ange titel</div>
<input className="Sell-input" id="title" name="title" maxLength="50" type="text" ref="title" onChange={this.handleChange} onChange={this.update.bind(this)} required />
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ange en bra beskrivning av produkten</div>
<textarea className="Sell-input Sell-text" rows="4" cols="50" maxLength="400" name="text" id="text" type="text" ref="text" onChange={this.handleChange} onChange={this.update.bind(this)} required />
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title">Ange pris</div>
<input className="Sell-price Sell-input" id="price" maxLength="10" name="price" type="text" ref="price" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title">Ange storlek, saknas storlek ange -.</div>
<input className="Sell-price Sell-input" id="size" name="size" maxLength="20" type="text" ref="size" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Typ av vara</div>
<select className="Sell- Sell-input" id="sort" name="sort" ref="sort" onChange={this.handleChange} onChange={this.handleSort} value={this.state.sort} required>
<option value="Accessories">Accessoarer</option>
<option value="Kläder">Kläder</option>
<option value="Shoes">Skor</option>
<option value="Protection">Skydd</option>
<option value="Equipment">Utrustning</option>
<option value="Bag">Väskor</option>
<option value="Övriga">Övrigt</option>
</select>
</div>

<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ladda upp en bild, för bäst resultat välj en liggande bild</div>
<form encType="multipart/form-data" onSubmit={this.fileUpload}>
<input className="fileInput" id="picture" type="file" ref="picture" name="picture" defaultValue={this.state.file} multiple accept=".jpg, .jpeg, .png" onChange={this.fileSelected} required/>
</form>

 <img style={{transform: `rotate(${rotation}deg)`}} alt="din bild" className="Sell-seePicture" src={this.state.file}/> <br></br>
<span className="button_spin" onClick={this.rotateImageVänster}>snurra vänster</span>
<span className="button_spin" onClick={this.rotateImageHöger}>snurra höger</span> 
</div>

<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title">Ange ditt namn</div>
<input className="Sell-name Sell-input" id="name" maxLength="30" name="name" type="text" ref="name" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ange den mailadress du angav vid registreringen</div>
<input className="Sell-email Sell-input" id="email" maxLength="30" name="email" type="text" ref="email" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ange det telefonnummer du vill köparna ska nå dig på.<br/> Vill du inte uppge telefonnummer skriv 0 istället.</div>
<input className="Sell-mail Sell-input" id="phone" name="phone" maxLength="10" type="text" ref="phone" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Ange kommun</div>
<input className="Sell-municipality Sell-input" id="municipality" maxLength="25" name="municipality" type="text" ref="municipality" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
</div>
<div className="Sell-innerBox">
<div className="Sell-sport Sell-input_title ">Vilket län bor du i</div>
<select className="Sell-county Sell-input" id="county" name="county" ref="county" onChange={this.handleChange} onChange={this.handleCounty} value={this.state.county}>
<option value="blekinge">Blekinge</option>
<option value="Dalarna">Dalarna</option>
<option value="Gotland">Gotland</option>
<option value="Gävleborg">Gävleborg</option>
<option value="Halland">Halland</option>
<option value="Jämtland">Jämtland</option>
<option value="Jonkoping">Jönköping</option>
<option value="Kalmar">Kalmar</option>
<option value="Kronoberg">Kronoberg</option>
<option value="norrbotten">Norrbotten</option>
<option value="Skåne">Skåne</option>
<option value="Stockholm">Stockholm</option>
<option value="Södermanland">Södermanland</option>
<option value="Uppsala">Uppsala</option>
<option value="Värmland">Värmland</option>
<option value="Västerbotten">Västerbotten</option>
<option value="Västernorrland">Västernorrland</option>
<option value="vastermanland">Västermanland</option>
<option value="Västragötaland">Västra Götaland</option>
<option value="Örebro">Örebro</option>
<option value="Östergötland">Östergötland</option>
</select>
</div>

<Price price={this.state.price} email={this.state.email}/>

<div className="Sell-accept">
<div className="Sell-accept_box">
<input className="acceptData-checkbox" type="checkbox" name="approved" onChange={this.acceptDataApproved.bind(this)} checked={this.state.acceptData} />
<div className="acceptData-text">Jag godkänner att mitt namn och telefonnummer sparas. <span className="Accept-text" onClick={this.terms}>Läs våra villkor.</span></div>
</div>

</div>
<div className="Sell-accept">
<div className="Sell-accept_box">
<input className="acceptPicture-checkbox" type="checkbox" name="acceptPicture" onChange={this.onAcceptPicture.bind(this)} checked={this.state.acceptPicture} />
<div className="acceptPicture-text">Jag godkänner att min bild används till marknadsföring av min annons. <span className="Accept-text" onClick={this.terms}>Läs våra villkor.</span></div>
</div>
</div>

<div className="Sell-innerBox">
<input className="Sell-submit" id="sub" type="submit" value="Lägg upp annonsen" />
</div>
</form>
</div>
</div>
</div>
</div>
<div className="Sell-Footer_position">
</div>
<Footer />
</div>

);
}
}

export default Sell;