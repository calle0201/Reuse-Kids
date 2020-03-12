import React, { Component } from 'react';
import Ridning from './../images/begagnad_ridutrustning_ridstovlar_ridhjalm-reusesport.jpg';
import Lacrosse from './../images/begagnad_lacrosseutrustning_lacrossehjalm_lacrossestick-reusesport.jpg';
import Konstakning from './../images/begagnad_konstakningsutrustning_konstakningsskridskor-reusesport.jpg';
import Skidor from './../images/begagnade_skidor-reusesport.jpg';
import Recipe from './Recipe';
import './MailRecipe.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class MailRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''}
        ;
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({email: event.target.email});
      }


    
      handleSubmit(event) {

        console.log(this.refs.email.value);
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.refs.email.value)){
           
           
        
            event.preventDefault();

            let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 

            let user = process.env.REACT_APP_REUSESPORT_DB_USER 
            let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
            let database = process.env.REACT_APP_REUSESPORT_DB_NAME



            const data = {
                email: this.refs.email.value,
                host: host,
                user: user,
                password: password,
                database: database
            }
   
     
            fetch('https://reusesport.se/kidsAPI/newsletter.php', {mode: "no-cors"}, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(resp => resp.text()) 
            .then((data) => {
                console.log(data);
                this.setState({
                data: data 
                });

                if(data == 1) {
                    let path = 'recipe';
                    this.props.history.push(path); 
                }
                else if (data == 2) {
                    alert('Du måste ange din mailadress.');
                }
                else{
                alert('Du kunde tyvärr inte ladda ner recepten just nu. Försök igen senare.')
                }
            });

            event.target.reset();

        }
        else {
            alert("Du har angivit en ogiltig epostadress. Kontrollera den angivna adressen!")
        }
      }
    
      render() {
        return (
          <div className="MailRecipe">
            <div className="Home-picture">
                <div className="Home-picture_images">
                    <div className="Home-pictureimg Image_skiing"><img src={Skidor} alt="Begagnad skidutrustning, skidor - ReUse Kids" /></div>
                    <div className="Home-pictureimg Image_riding"><img src={Ridning} alt="Begagnad ridutrustning, ridstövlar, ridhjälm - ReUse Kids" /></div>
                    <div className="Home-pictureimg Image_figureskating"><img src={Konstakning} alt="Begagnad konståkningsutrustning, konståkningsskridskor - ReUse Kids" /></div>
                    <div className="Home-pictureimg Image_lacrosse"><img src={Lacrosse} alt="Begagnad Lacrosseutrustning, lacrossestick, lacrossehjälm - ReUse Kids" /></div>
                </div>
            </div>
            <div className="MailRecipe-innerBox">
            <div className="MailRecipe_title">Ladda ner recept på bra mellanmål innan träning. </div>
            <form className="MailRecipe_form" onSubmit={this.handleSubmit}> 
                <div className="MailRecipe_button">
                <input className="MailRecipe_email" type="text" value={this.state.email} placeholder="Ange din mailadress" ref='email' onChange={this.handleChange} />
                </div>
                <div className="MailRecipe_button">
                    <input className="MailRecipe_submit" type="submit" value="Ja jag vill gärna ha recepten" />
                </div>
            </form>

              <div className="MailRecipe_text">Du kommer i fortsättningen få vårt nyhetsbrev med tips och erbjudanden till din mail. Du kan när du vill avsäga dig nyhetsbrevet. </div>
            </div>
          </div>
        );
      }
}

export default MailRecipe;


