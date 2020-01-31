import React, { Component } from 'react';
import Frisbee from './../images/frisbee1.jpg';
import Running from './../images/löparbana.jpg';
import Ishall from './../images/ishall.jpg';
import Fotboll from './../images/fotboll.jpg';
import Price from './Price';
//import UploadImage from './UploadImage';
import './Sellside.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Sellside extends Component {


    constructor(props) {
        super(props);
        this.state = {
       
            email: "",
            registerPassword: "",
            approved: "",
            checkBoxStatus: false,
            checkBoxNews: false,
            text: "",
            answer: '',
            text: "",
            answer: '',
            sport: "",
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
        }    

        this.registerUser = this.registerUser.bind(this);
        this.clickedCheckBoxApproved = this.clickedCheckBoxApproved.bind(this);
        this.clickedCheckBoxNewsletter = this.clickedCheckBoxNewsletter.bind(this);
        this.terms = this.terms.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSport = this.handleSport.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleCounty = this.handleCounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

     registerUser(event) {

        event.preventDefault();


        if(this.state.checkBoxStatus === true){

            let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 

            let user = process.env.REACT_APP_REUSESPORT_DB_USER 
            let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
            let database = process.env.REACT_APP_REUSESPORT_DB_NAME


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
                else {
                  alert('Du kan nu lägga in din annons');
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
            registerPassword: this.refs.registerPassword.value,
            sport: this.refs.sport.value,
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

    rotateImage() {
        console.log('rotera bilden');
    }
   

    fileUpload(event) {
     

        const picturename = this.refs.picture.value.split('C:\\fakepath\\')[1];
    //    console.log('PHOTO:', this.state.picture);
      //  console.log('name:', picturename);
  
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

      

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
         

        const image = this.refs.picture.value.split('C:\\fakepath\\')[1];
        const data = {
            sport: this.refs.sport.value,
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
            if(data == 1) {
                alert('Tack! Din annons är nu publicerad.')
            }
            else if(data == 2) {
                 alert('Du måste fylla i alla fälten.');
            }
            else if(data == 3) {
                alert('Bilden måsta vara mindre än 2 MB.');
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


    register() {
        let path = 'register';
        this.props.history.push(path);
    }
   

    handleChange(event) {
        console.log('handleChange');
        
    }

    onSubmit = () => {
        
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

    fileSelected(event) {

        this.setState({
            picture: event.target.files[0],
            file: URL.createObjectURL(event.target.files[0])
        })

        // <img className="Sell-seePicture" src={this.state.file}/>
  
    }

 

      





    terms() {
        let path = 'terms';
        this.props.history.push(path); 
    }
   

    handleChange(event) {
        console.log('handleChange');
        
    }



    render() {
        return(

            <div className="Sellside">
               
               <div className="Sell-picture">
                <div className="Home-picture_images">
                    <div className="Home-pictureimg Image_ice"><img src={Ishall} alt="Ishockey and konståkning" /></div>
                    <div className="Home-pictureimg Image_socker"><img src={Fotboll} alt="Fotboll" /></div>
                    <div className="Home-pictureimg Image_running"><img src={Running} alt="Löpning och friidrott" /></div>
                </div>
            </div>
                <div className="Sell-innerbox">
                    <h1 className="Sell-title">Har du begagnad barn produkter som inte används?</h1> 
                    <h2 className="Sell-intro">Sälj dem hos oss, det finns många som gärna vill köpa.</h2>                        <h2 className="Sell-intro">För att lägga in din första annons måste du skapa ett användarkonto. </h2> 

                    <div className="Sellside-register"> 
 
                        <div className="Sellside-registerbox">
                  
                            <form className="Registerform-form" onSubmit={this.registerUser}>
                                <input className="Sellside-email" name="email" type="text" ref="email" placeholder="Din mailadress"  required/><br/>
                                <input className="Sellside-password" name="password" type="text" ref="registerPassword" placeholder="Önskat lösenord" onChange={this.handleChange} onChange={this.update.bind(this)} required/> <br/>     
                                <div className="approved-checkbox_box">
                                    <input className="approved-email" type="checkbox" onChange={this.clickedCheckBoxApproved} checked={this.state.checkBoxApproved} name="approved" /> <p className="checkbox-text">Jag godkänner att ni sparar min mail.</p> 
                                    <label className="approved-email_button" onClick={this.terms}>Läs våra villkor.</label><br />
                                </div>
                                <div className="approved-email_text">Prenumerera på vårt nyhetsbrev. Du kommer få  olika tips, värdekoder mm.</div>
                            
                                <div className="approved-checkbox_box">
                                    <input className="approved-checkbox" type="checkbox" onChange={this.clickedCheckBoxNewsletter} checked={this.state.checkBoxNewsletter}  name="newsletter" /> <p className="checkbox-text">Jag önskar ert nyhetsbrev. </p><br />
                                </div>
                                <input className="Submit_button" id="sub" type="submit" value="Registrera mig"/> <br/>
                            </form>
                 
                        </div>
                    </div>
                        <form className="Sell-form" onSubmit={this.handleSubmit}>
                            <div className="Sell-innerBox">
                            <div className="Sell-sport Sell-input_title ">Välj sport</div>
                            <select className="Sell- Sell-input" id="sport" name="sport" ref="sport"  onChange={this.handleChange} onChange={this.handleSport} value={this.state.sport} required>
                                <option value="Badminton">Badminton</option>
                                <option value="Bandy">Bandy</option>
                                <option value="Basket">Basket</option>
                                <option value="Boxning">Boxning</option>
                                <option value="Brottning">Brottning</option>
                                <option value="Bågskytte">Bågskytte</option>
                                <option value="Cykelsport">Cykelsport</option>
                                <option value="Flygsport">Flygsport</option>
                                <option value="Fotboll">Fotboll</option>
                                <option value="Friidrott">Friidrott</option>
                                <option value="Dykning">Dykning</option>
                                <option value="Fäktning">Fäktning</option>
                                <option value="Golf">Golf</option>
                                <option value="Gymnastik">Gymnastik</option>
                                <option value="Handboll">Handboll</option>
                                <option value="Ishockey">Ishockey</option>
                                <option value="Innebandy">Innebandy</option>
                                <option value="Lacrosse">Lacrosse</option>
                                <option value="Kampsport">Kampsport</option>
                                <option value="Kanot">Kanot</option>
                                <option value="Klättring">Klättring</option>
                                <option value="Konståkning">Konståkning</option>
                                <option value="Motorsport">Motorsport</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Ridsport">Ridsport</option>
                                <option value="Rugby">Rugby</option>
                                <option value="Segling">Segling</option>
                                <option value="Skidsport">Skidsport</option>
                                <option value="Vattenskidor">Vattenskidor</option>
                                <option value="Vindsurfing">Vindsurfing</option>
                                <option value="Övriga">Övriga</option>
                            </select>    
                            </div>

                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Ange titel</div>
                                <input className="Sell-input" id="title" name="title"  maxLength="50" type="text" ref="title" onChange={this.handleChange} onChange={this.update.bind(this)} required />
                            </div>  
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Ange en bra beskrivning av produkten</div>
                                <textarea className="Sell-input Sell-text" rows="4" cols="50" maxLength="500" name="text" id="text" type="text" ref="text" onChange={this.handleChange} onChange={this.update.bind(this)} required />
                            </div>
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title">Ange pris</div>
                                <input className="Sell-price Sell-input" id="price" name="price" type="text" ref="price" onChange={this.handleChange} onChange={this.update.bind(this)} required/> 
                            </div>
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title">Ange storlek, saknas storlek ange -.</div>
                                <input className="Sell-price Sell-input" id="size" name="size" type="text" ref="size" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                            </div>
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Typ av vara</div>
                                <select className="Sell- Sell-input" id="sort" name="sort" ref="sort"  onChange={this.handleChange} onChange={this.handleSort} value={this.state.sort} required>
                                    <option value="Accessories">Accessoarer</option>
                                    <option value="clothes">Kläder</option>
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
                                    <input className="fileInput" id="picture" type="file" ref="picture" name="picture"  defaultValue={this.state.file} multiple accept=".jpg, .jpeg, .png" onChange={this.fileSelected}  required/>
                               </form>

                                <img className="Sell-seePicture" src={this.state.file}/>
                            </div>
                           
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title">Ange ditt namn</div>
                                <input className="Sell-name Sell-input" id="name" name="name" type="text" ref="name" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                            </div>
                            <div className="Sell-innerBox">    
                                <div className="Sell-sport Sell-input_title ">Ange den mailadress du angav vid registreringen</div>
                                <input className="Sell-email Sell-input" id="email" name="email" type="text" ref="email" onChange={this.handleChange} onChange={this.update.bind(this)} required/>                            
                            </div>
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Ange det telefonnummer du vill köparna ska nå dig på.<br/> Vill du inte uppge telefonnummer skriv 0 istället.</div>
                                <input className="Sell-mail Sell-input" id="phone" name="phone" type="text" ref="phone" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                            </div>
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Ange kommun</div>
                                <input className="Sell-municipality Sell-input" id="municipality" name="municipality" type="text" ref="municipality" onChange={this.handleChange} onChange={this.update.bind(this)} required/>
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
        
        )
    }    
}


export default Sellside;