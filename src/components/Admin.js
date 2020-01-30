import React, { Component } from 'react';
import RegisterCompounds from './RegisterCompounds';
//import LogCompound from './LogCompound';
import './Admin.css';

class Admin extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
    }
    
    

    componentDidMount() {

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
            })
          };

        fetch('https://reusesport.se/APIs/getcontact.php', obj)
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
        <div className="Admin">
            <RegisterCompounds/>

            <h1 className="Admin_title">Meddelanden</h1>
            <div className="AdminBox">
                    {
                        this.state.ads ?
                        this.state.ads.map((item) =>
                    
                         <div className="Admin-innerBox" >
                         <h3 className="AdminBox_title">{item.title}</h3>
                            <div className="AdminBox_date">{item.date} </div>
                            <div className="AdminBox_message">{item.message}</div>
                            <div className="AdminBox_name">{item.name}</div>
                            <div className="AdminBox_email">{item.email}</div>
                          
                       
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

export default Admin;