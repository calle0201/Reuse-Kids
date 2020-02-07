import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//import MyAdvertisment from './MyAdvertisment';
//import MyInformation from './MyInformation';
import './DeleteAdvertisment.css';


class DeleteAdvertisment extends Component {


    constructor(props) {
        super(props);
        this.state = {
          data: null,
        
        };
        
    }
    

    componentWillUpdate(){
        console.log('uppdateras');
    }


  
    deleteAd(e) {

        let host = process.env.REACT_APP_REUSESPORT_DB_HOST; 
        let user = process.env.REACT_APP_REUSESPORT_DB_USER; 
        let password = process.env.REACT_APP_REUSESPORT_DB_PASSWORD;
        let database = process.env.REACT_APP_REUSESPORT_DB_NAME;

        //console.log(this.props.id);

        const data = {
            id: this.props.id,
            host: host,
            user: user,
            password: password,
            database: database,
        }    

        fetch('https://reusesport.se/kidsAPI/deleteAdvertisment.php', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.text()) 
        //.then(data => console.log(data))
        //.then(resp=>console.warn("result", resp))
        this.setState({
            data:data
        });
        if(data == 1) {
            alert('Annonsen är nu borttagen.')
        }
       
    }
  
     

    render() {
        return (
            <div className="DeleteAdvertisment">
        
                <p className="DeleteAdvertisment_delete" onClick={this.deleteAd.bind(this, this.props.id)}><FontAwesomeIcon icon={faTrash} /> </p>
              
            </div>  
        );
    }
}

export default DeleteAdvertisment;

