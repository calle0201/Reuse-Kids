import React, { Component } from 'react';
//import Ocean from './../images/salj_din_begagnade_barn produkter-reusesport.jpg';
import HCE from './../images/hce-logga.jpeg';
import './LogCompound.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
import LoginCompounds from './LoginCompounds';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class LogCompound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: null,
            picturefile: "",
            thepicture: "",
            selectedFile: null,
            file: null,
            pictureInput: "",
            marketingpicture: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.terms = this.terms.bind(this);
    }


    update() {

        this.setState({
            compoundid: this.refs.compoundid.value,
            picture: this.refs.picture.value,
           
        })         
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
    //    console.log('PHOTO:', this.state.picture);
      //  console.log('name:', picturename);
  
        const h = {}; //headers
        let data = new FormData();
        data.append('email', this.state.email);
        data.append('image', this.state.picture);
        data.append('name', picturename);
        h.Accept = 'application/json'; //if you expect JSON response

        fetch('https://reusesport.se/APIs/compoundid.php', {
            method: 'POST',
            headers: h,
            body: (data)
        })
        .then(resp => resp.text()) 
        .then(data => console.log(data))

    }

  
    
    handleSubmit(event) {
        event.preventDefault();

     

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
         

        const image = this.refs.picture.value.split('C:\\fakepath\\')[1];
        const data = {
            picture: image,
            host: host,
            user: user,
            password: password,
            database: database,
            marketingpicture: this.state.marketingpicture,
        }
       


        fetch('https://reusesport.se/APIs/logcompound.php', {
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
                let path = 'thanksad';
                this.props.history.push(path); 
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

      fetch('https://reusesport.se/APIs/compoundid.php', {
          method: 'POST',
          headers: h,
          body: (imagedata)
      })
      .then(resp => resp.text()) 
     // .then(imagedata => console.log(imagedata))
      

  
    }


    terms() {
        let path = 'terms';
        this.props.history.push(path); 
    }



    handleChange(event) {
        console.log('handleChange');
        
    }

    onSubmit = () => {
        
    }
  

  render() {
      
    return (
        <div className="LogCompound"> 
            <div className="LogCompound-picture">
            <div className="Compounds-logga">
                <img src={HCE} alt="Haninge cheer elite - Reuse Kids" />
            </div>
                <div className="LogCompound-Box">
                        <form className="LogCompound-form" onSubmit={this.handleSubmit}>
                        <div className="LogCompound-innerBox">
                            <div className="LogCompound-innerBox">
                                <div className="LogCompound-sport LogCompound-input_title ">Ladda upp en bild, för bäst resultat välj en liggande bild</div>
                                <form encType="multipart/form-data" onSubmit={this.fileUpload}>
                                    <input className="fileInput" id="picture" type="file" ref="picture" name="picture"  defaultValue={this.state.file} multiple accept=".jpg, .jpeg, .png" onChange={this.fileSelected}  required/>
                               </form>

                                <img className="LogCompound-seePicture" src={this.state.file}/>
                            </div>
                            <div className="LogCompound-innerBox">     
                                <input className="LogCompound-submit" id="sub" type="submit" value="Lägg upp annonsen" />
                            </div>
                            </div>
                        </form>
                </div>    
            </div>  
        </div>
    );
  }
}

export default LogCompound;