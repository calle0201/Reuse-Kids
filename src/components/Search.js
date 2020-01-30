import React, { Component } from 'react';
import Ocean from './../images/ocean.jpg';
import Popup from './Popup';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: "",
            title: "",
            text: "",
            price: "",
            picture: "",
            name: "",
            email: "",
            phone: "",
            municipality: "",
            county: "",
            value: ""
           
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSport = this.handleSport.bind(this);
        this.handleCounty = this.handleCounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    update() {
        this.setState({
            sport: this.refs.sport.value,
            county: this.refs.county.value
        })
               
    }

    handleSport(event) {
        console.log('sport');
        this.setState({sport: event.target.value});
        console.log(event.target.value);
    }

    handleCounty(event) {
        console.log('län');
        this.setState({county: event.target.value});
        console.log(event.target.value);
    }


    
    handleSubmit(event) {
        event.preventDefault();

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME

        

        var obj = {  
            method: 'POST',
            body: JSON.stringify({
              host: host,
              user: user,
              password: password,
              database: database,
              sport: this.refs.sport.value,
              county: this.refs.county.value,
            })
          };

          console.log(obj);

        fetch('https://reusesport.se/APIs/searchAd.php', obj)
        //.then(data => console.log(data)) 
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => {
              console.log(json);
            this.setState({
              ads: json
            });
          });  
    
        

       /* .then(resp => resp.text()) 
        .then(data => console.log(data)) 
        /*.then((data) => {
            console.log(data);
            this.setState({
                data: data 
            });
            console.log(data)
           /* if(data == 1) {
               // alert('Tack. Annonsen är nu upplagd!');
                let path = 'thanksad';
                this.props.history.push(path); 
            }
            else{
                alert('Annonsen kunde inte publiceras försök igen senare.');
            }*/
       // })
       // .then(resp=>console.warn("result", resp))
    }    

   handleChange(event) {
      
   }
    onSubmit = () => {
        
    }
  

  render() {

    return (
        <div className="Search"> 
        
                     
                  
        <div className="Serach-sport">
                <form className="Search-sportform" onSubmit={this.handleSubmit}>
                           
                    <div className="">Välj sport</div>
                        <select className="" id="sport" name="sport" ref="sport"  onChange={this.handleChange} onChange={this.searchSport} value={this.state.sport} required>
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
                  

                    <div className="Search-county">
                        <select className="" id="county" name="county" ref="county" onChange={this.handleChange} onChange={this.searchCounty} value={this.state.county}>                               
                            <option value="wholeCounty">Hela landet</option>
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

                    <div className="Search-innerBox">     
                        <input className="Search-submit" id="sub" type="submit" value="Sök annonser" />
                    </div>

                </form>   
            </div>


            <div className={`Alladvertisment ${this.props.hideAdgallery ? ' ':'false'}`}>
           {
                 
                 this.state.ads ?
                 this.state.ads.map((item) =>
                 <div className="Advertisment-outsideBox">
                 <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                     {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                     <h3 className="AdvertismentBox_title">{item.title}</h3>
                     <div className="AdvertismentBox_imageBox">
                         <img className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
                     </div>
                     <div className="AdvertismentBox_price">{item.price} kr</div>
                     <div className="AdvertismentBox_date">{item.date}</div>
                     <div className="AdvertismentBox_county">{item.municipality}</div>
                     <div className="AdvertismentBox_county">{item.county}</div>
                 </div>
                 </div>
             )
                 :
                 <h3>Vänta - datat hämtas</h3>
             }
        </div>
        </div>    
          

    );
  }
}

export default Search;