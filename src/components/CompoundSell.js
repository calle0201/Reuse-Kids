import React, { Component } from 'react';
import Ocean from './../images/salj_din_begagnade_sportutrustning-reusesport.jpg';
//import ReactFileReader from 'react-file-reader';
//import CompoundPrice from './CompoundPrice';
import Price from './Price';
import Footer from './Footer';
import LogCompound from './LogCompound';
import CompoundSubNav from './CompoundSubNav';
import './CompoundSell.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class CompoundSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compound: "",
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
            value: "",
            selectedFile: null,
            file: null,
            //checkBoxStatus: false,
            //pictureInput: "",
            //marketingpicture: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.terms = this.terms.bind(this);
        this.register = this.register.bind(this);
    }


    update() {

        this.setState({
            title: this.refs.title.value,
            text: this.refs.text.value,
            price: this.refs.price.value,
            size: this.refs.size.value,
            sort: this.refs.sort.value,
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            marketingpicture: this.state.marketingpicture
        })         
    }

    handleSort(event) {
        this.setState({sort: event.target.value});
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

        fetch('https://reusesport.se/APIs/getid.php', {
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
            compound: this.refs.compound.value,
            title: this.refs.title.value,
            text: this.refs.text.value,
            price: this.refs.price.value,
            size: this.refs.size.value,
            sort: this.refs.sort.value,
            picture: image,
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            host: host,
            user: user,
            password: password,
            database: database,
            //marketingpicture: this.state.marketingpicture,
        }
       
        console.log(data);

        fetch('https://reusesport.se/APIs/compoundadvertisment.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        .then((data) => {
            console.log(data);
            this.setState({
                data: data 
            });
            console.log(data)
            if(data == 1) {
                alert('Tack.');
                /*let path = 'thanksad';
                this.props.history.push(path); */
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

      fetch('https://reusesport.se/APIs/getid.php', {
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
      
    return (
        <div className="CompoundSell"> 
            <div className="CompoundSell-picture">
            <LogCompound />
            <CompoundSubNav />
                 <div className="CompoundSell-Box">
                    <div className="CompoundSell-innerbox">
                        <h1 className="CompoundSell-title">Har du begagnad utrustning som inte längre används?</h1> 
                        <h2 className="CompoundSell-intro">För att lägga in din första annons måste du skapa ett användarkonto. Registrera dig <div className="registerLink" onChange={this.registerUser.bind(this)} onClick={this.register}>här </div></h2> 

                        <div className="attention">Rekommenderar att du använder Safari, Chrome, Opera eller Firefox när du lägger in annonser.</div> 
                        <form className="CompoundSell-form" onSubmit={this.handleSubmit}>
                            <div className="CompoundSell-innerBox">
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Förening</div>
                                <input className="Sell-input" id="title" name="title"  maxLength="50" type="text" ref="compound" onChange={this.handleChange} onChange={this.update.bind(this)} required />
                            </div> 
                            <div className="Sell-innerBox">
                                <div className="Sell-sport Sell-input_title ">Ange titel</div>
                                <input className="Sell-input" id="title" name="title"  maxLength="50" type="text" ref="title" onChange={this.handleChange} onChange={this.update.bind(this)} required />
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
                            
                       
                            
                            <Price price={this.state.price} email={this.state.email}/>  

                            <div className="Sell-accept">
                                <div className="Sell-accept_box">
                                    <input className="acceptData-checkbox" type="checkbox" name="approved" onChange={this.acceptDataApproved.bind(this)} checked={this.state.acceptData} /> 
                                    <div className="acceptData-text">Jag godkänner att mitt namn och telefonnummer sparas. <span className="Accept-text" onClick={this.terms}>Läs våra villkor.</span></div>
                                </div>
                           
                            </div>

                            <div className="Sell-innerBox">     
                                <input className="Sell-submit" id="sub" type="submit" value="Lägg upp annonsen" />
                            </div>
                            </div>
                        </form>
                    </div>    
                </div>  
            </div>
            <Footer />
        </div>

    );
  }
}

export default CompoundSell;