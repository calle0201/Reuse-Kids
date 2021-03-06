import React from 'react';
import Popup from './Popup';
import "./HomeGallery.css";


//import Thumbnail from 'react-thumbnail';




//Bildgalleriet på Homesidan

class HomeGallery extends React.Component {


constructor(props, pic) {
  super(props, pic);
    this.state = {
      datasport: null,
      clicked: null,
      pictures: '',
      ads: [],
      data: [],
     
};
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


fetch('https://reusesport.se/kidsAPI/homepictures.php', obj)
.then(res => {
if (res.ok) {
  return res.json();
} else {
  console.log('test');
  
/* throw Error(res.statusText); */
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
      <div className="Alladvertisment Advertisment-homepage">
        {
          this.state.ads ? 
          this.state.ads.map((item) =>
          <div  className="Advertisment-outsideBox">
          <div className="AdvertismentBox" onClick={this.togglePopup.bind(this, item.id)}>
            {this.state.clicked=== item.id ? <Popup id=
            {item.id} title={item.title} picture={item.picture} text={item.text} size={item.size}
            price={item.price} phone={item.phone} name=
            {item.name} email={item.email} date={item.date}
             municipality={item.municipality} county={item.county}/> : null}
             <h3 className="AdvertismentBox_title">{item.title}</h3>
          <div className="AdvertismentBox_imageBox">
            <img className="AdvertismentBox_image" src={item.picture} alt={item.title}/>
          </div>
          <div className="show">{item.text}</div>
          <div className="AdvertismentBox_price">{item.price} kr
          </div>
          <div className="AdvertismentBox_date">{item.date}</div>
          <div className="AdvertismentBox_county">{item.county}
          </div>
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

export default HomeGallery;