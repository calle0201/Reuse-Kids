import React, { Component } from 'react';
//import Popup from './Popup';
import './MyInformation.css';




class MyInformation extends Component {


    constructor(props) {
        super(props);
        this.state = {
          data: null,
        
        };
        this.handleChange = this.handleChange.bind(this);
    }

     
   
           
  componentDidMount() {
        
  
    
        fetch('https://reusesport.se/kidsAPI/myInformation.php')
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

    update() {
        this.setState({
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            municipality: this.refs.municipality.value,
            county: this.refs.county.value,
            
        })
               
    }

    handleClick(e) {
        e.preventDefault();
        console.log('klick');
    }
  
    handleChange(event) {
      
    }
     onSubmit = () => {
         
     }

    render() {
        return (
            <div>
        
                <div className="MyInformation"> 
                
                        {
                            this.state.ads ?
                            this.state.ads.map((item) =>
                            <div>
                         
                            
                            <div className="MyInformation-title">Mina uppgifter</div>
                                <div className="MyInformationBox">
                                    <form className="Register-form" onSubmit={this.handleSubmit}>
                                        <input className="MyInformation-firstname" id="firstname" name="firstname" type="text" ref="firstname" placeholder={item.firstname} onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                                        <input className="MyInformation-lastname" id="lastname" name="lastname" type="text" ref="lastname" placeholder={item.lastname} onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                                        <input className="MyInformation-email" id="email" name="email" type="text" ref="email" placeholder={item.email} onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                                        <input className="MyInformation-municipality" id="numiciplaity" name="municipality" type="text" ref="municipality" placeholder={item.municipality} onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                                        <input className="MyInformation-county" id="county" name="county" type="text" ref="county" placeholder={item.county} onChange={this.handleChange} onChange={this.update.bind(this)} required/>
                                    </form>    
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

export default MyInformation;