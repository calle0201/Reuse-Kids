import React, { Component } from 'react';
import DeleteAdvertisment from './DeleteAdvertisment';

import './MyAdvertisment.css';


import { faFirstAid } from '@fortawesome/free-solid-svg-icons';





class MyAdvertisment extends Component {


    constructor(props) {
        super(props);
        this.state = {
          data: null,
          userid: '',
          
        };
        //this.togglePopup = this.togglePopup.bind(this);

        this.getAdvertisment =  this.getAdvertisment.bind(this);

        

       /* this.setState ({
            userid: this.props.userid
        });*/

    }

    getAdvertisment(userid) {
     
        userid = userid.substring(1,userid.length - 1);
        console.log(userid);


        let host = process.env.REACT_APP_REUSESPORT_DB_HOST
        let user = process.env.REACT_APP_REUSESPORT_DB_USER 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME
    
                var obj = {  
                    method: 'POST',
                    body: JSON.stringify({
                        userid: userid,
                        host: host,
                        user: user,
                        password: password,
                        database: database,
                    })
                  };
        
        console.log(obj);
    
                fetch('https://reusesport.se/kidsAPI/myAdvertisment.php', obj)
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
           
    componentDidMount() {
        console.log(this.props.userid);
       let userid = this.props.userid;

        this.getAdvertisment(userid);
    }

    deleteAd(id, e) {
       
        console.log('klick');

        this.setState({
            clicked: id
        });
    }

  
  
     

    render() {
        return (
            <div>
        
                <div className="MyAdvertisment">

                <div className="MyAdvertisment-title">Mina annonser</div>

                
                        {
                            this.state.ads ?
                            this.state.ads.map((item) =>
                            <div className="MyAdvertismentBox">
                                <p className="MyAdvertisment_id">{item.id}</p>
                                <div className="MyAdvertisment_box-image">
                                    <img className="MyAdvertisment_image" src={item.picture} alt={item.title}/>
                                </div>
                                <div className="MyAdvertisment_box-title">
                                    <p className="MyAdvertisment_title">{item.title}</p>
                                </div>
                                <div className="MyAdvertisment_box-date">
                                    <p className="MyAdvertisment_date">{item.date}</p>
                                </div>
                                <DeleteAdvertisment id={item.id}/>
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

export default MyAdvertisment;