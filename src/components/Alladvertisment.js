import React  from 'react';
import Popup from './Popup';
import './Alladvertisment.css';




class Alladvertisment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            sport: '',
            county: '',
            hideAds:'',
        };

        this.searchCounty = this.searchCounty.bind(this);
        this.searchSport = this.searchSport.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.hideAds !== nextProps.hideAds) {
            this.setState({
                hideAds: nextProps.hideAds
            })
        }
    }

    searchSport(event) {
        this.setState({sport: event.target.value});
       // console.log(event.target.value);
    }

    searchCounty(event) {
        this.setState({county: event.target.value});
      //  console.log(event.target.value);
    }

    update() {

        this.setState({
            sport: this.refs.sport.value,
            county: this.refs.county.value,
            hideAds: this.props.hideAds
        })       
        
       // console.log(this.props.hideAds);
    }

    handleSubmit(event) {
        event.preventDefault();

        let host = 'reusesport.se.mysql';
        let user = 'reusesport_sekids';
        let password = 'J87jket37snjt89yte5lk2';
        let database = 'reusesport_sekids';

        


        const data = {
            host: host,
            user: user,
            password: password,
            database: database,
            sport: this.refs.sport.value,
            county: this.refs.county.value,
        }    

        console.log(data);


        
        fetch('https://reusesport.se/kidsAPI/searchAd.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
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
    }    

    togglePopup(id, e) {
        this.setState({
            clicked: id,
           
        });
    }


    componentDidMount() {



        let host = 'reusesport.se.mysql';
let user = 'reusesport_sekids';
let password = 'J87jket37snjt89yte5lk2';
let database = 'reusesport_sekids';

        
        var obj = {  
            method: 'POST',
            body: JSON.stringify({
              host: host,
              user: user,
              password: password,
              database: database,
            })
          };

          console.log(obj);

        fetch('https://reusesport.se/kidsAPI/alladvertisment.php', obj)
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

   }


    render() {
     
     
      return (
        <div>
           
        


        <div className={`Alladvertisment ${this.state.hideAds? 'hidden':''}`}>
           {
                 
                 this.state.ads ?
                 this.state.ads.map((item) =>
                 <div id={`item-${item.id}`} className="Advertisment-outsideBox">
                 <div className="AdvertismentBox"  onClick={this.togglePopup.bind(this, item.id)}>
                     {this.state.clicked=== item.id ? <Popup id={item.id} title={item.title} picture={item.picture} text={item.text} size={item.size} price={item.price} phone={item.phone} name={item.name} email={item.email} date={item.date} municipality={item.municipality} county={item.county}/> : null}
                     <div className="AdvertismentBox_title">
                      <p className="AdvertismentBox_titleText"> 
                        {item.title} 
                      </p>  
                    </div>
                     <div className="AdvertismentBox_imageBox">
                         <img className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
                     </div>
                   <div className="show">{item.text}</div>
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

  export default Alladvertisment;  